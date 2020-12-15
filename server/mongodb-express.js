const {MongoClient} = require("mongodb");
const cors = require('cors');
const express = require('express');

const app = express();
const PORT = 9292;

app.use(require('body-parser').json());
app.use(cors());

app.options('*', cors());


// Connection URI
const uri =
    "mongodb://devicimongodb162.westeurope.cloudapp.azure.com:30000/?readPreference=primary&appname=GuessFilm&ssl=false";
// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
        await client.db("admin").command({ping: 1});
        console.log("Connected successfully to server");
    } catch (err) {
        console.error(err);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}


// APIs

// requete 1
app.get('/movies/director', function (req, res) {
    let bodyRequest = req.query;
    let film = bodyRequest.film;
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("movies").find({"name": film}, {
            projection: {
                "_id": 0,
                "name": 1,
                "year": 1,
                "directors.first_name": 1,
                "directors.last_name": 1
            }
        }).toArray(function (err, result) {
            if (err) throw err;
            res.send(result);
            db.close();
        });
    });
});

// requete 2

app.get('/movies/genre', function (req, res) {
    let bodyRequest = req.query;
    let genre = bodyRequest.genre;
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("movies").aggregate({$unwind: {path: "$genres"}}, {$match: {$and: [{genres: genre}, {rank: {$ne: null}}]}}, {$sort: {rank: -1}}, {$limit: 10}, {
            $project: {
                _id: 1,
                name: 1,
                year: 1,
                rank: 1,
                directors: {id: 1, first_name: 1, last_name: 1}
            }
        })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});

// requete 3
app.get('/actors/top10/year', function (req, res) {
    let bodyRequest = req.query;
    let year = bodyRequest.year;
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("movies").aggregate({$match: {"year": year}}, {$unwind: {path: '$actors'}}, {
            $group: {
                _id: "$actors.actor_id",
                count: {$sum: 1}
            }
        }, {$sort: {"count": -1}}, {$limit: 10})
            .toArray(function (err, result) {
                if (err) throw err;
                result = result.splice(0, 10);
                resultIds = [];
                result.forEach(res => {
                    resultIds.push(res["_id"]);
                });
                dbo.collection("actors").find({"_id": {$in: resultIds}}, {
                    projection: {
                        "_id": 0,
                        "last_name": 1,
                        "first_name": 1
                    }
                }).toArray(function (err, result) {
                    if (err) throw err;
                    res.send(result);
                    db.close();
                })
            });
    });
});

// requete 4
app.get('/movies/bestmovie/actor', function (req, res) {
    let bodyRequest = req.query;
    let firstName = bodyRequest.firstName;
    let lastName = bodyRequest.lastName;
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("actors").find({
            "last_name": lastName,
            "first_name": firstName
        }, {projection: {"_id": 1}}).toArray(function (err, result) {
            if (err) throw err;
            dbo.collection("movies").find({"actors.actor_id": result[0]["_id"]}, {projection: {"actors": 0}})
                .sort({"rank": -1}).limit(1).toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            })
        });
    });
});

// requete 5
app.get('/movies/evolution/year', function (req, res) {
    let bodyRequest = req.query;
    let genre = bodyRequest.genre;
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("movies").aggregate([
            {$unwind: "$genres"},
            {$project: {"_id": 0, "year": 1, "genres": 1}},
            {$group: {"_id": {"genres": "$genres", "year": "$year"}, "total": {$sum: 1}}},
            {
                $group: {
                    "_id": "$_id.year",
                    "types": {$push: {"genre": "$_id.genres", total: "$total"}},
                    "grandTotal": {$sum: "$total"}
                }
            },
            {$unwind: "$types"},
            {
                $project: {
                    "_id": 0,
                    "genre": "$types.genre",
                    "percentage": {$divide: ["$types.total", "$grandTotal"]},
                    "year": "$_id"
                }
            },
            {$match: {"genre": genre}}, {$sort: {"year": 1}}
        ])
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});

// requete 6
app.get('/movies/director/evolution', function (req, res) {
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("movies").aggregate({$match: {"rank": {"$ne": null}}}, {$unwind: {path: "$directors"}}, {
            $project: {
                "year": 1,
                "rank": 1,
                "genres": 1,
                "directors": {"id": 1, "first_name": 1, "last_name": 1}
            }
        }, {$unwind: {path: "$genres"}}, {
            $group: {
                _id: {"year": "$year", "genre": "$genres", "director_id": "$directors.id"},
                first_name: {"$first": "$directors.first_name"},
                last_name: {"$first": "$directors.last_name"},
                success: {"$avg": "$rank"}
            }
        }, {
            $group: {
                _id: {"year": "$_id.year", "genre": "$_id.genre"},
                avg_rank: {$max: "$success"},
                first_name: {$first: "$first_name"},
                last_name: {"$first": "$last_name"}
            }
        })
            .toArray(function (err, result) {
                if (err) throw err;
                res.send(result);
                db.close();
            });
    });
});

// requete 7
app.get('/movies/genre/bestactor', function (req, res) {
    let requestBody = req.query;
    let genre = requestBody.genre;
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("movies").aggregate(
            [{$match: {"genres": genre}},
                {$project: {"rank": 1, "actors": 1}},
                {$unwind: "$actors"},
                {$group: {_id: "$actors.actor_id", moyenne: {$avg: "$rank"}}},
                {$sort: {moyenne: -1}}, {$limit: 1}
            ])
            .toArray(function (err, result) {
                if (err) throw err;
                dbo.collection("actors").find({"_id": result[0]["_id"]}, {
                    projection: {
                        "last_name": 1,
                        "first_name": 1,
                        "_id": 0
                    }
                }).toArray(function (err, resultFinal) {
                    if (err) throw err;
                    res.send({
                        "last_name": resultFinal[0]["last_name"],
                        "first_name": resultFinal[0]["first_name"],
                        "moyenne": result[0]["moyenne"]
                    });
                    db.close();
                })
            });
    });
});


// requete 8
app.get('/actors/genre', function (req, res) {
    let requestBody = req.query;
    let lastName = requestBody.lastName;
    let firstName = requestBody.firstName;
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("actors").find({"last_name": lastName, "first_name": firstName}, {projection: {"_id": 1}})
            .toArray(function (err, result) {
                if (err) throw err;
                dbo.collection("movies").aggregate({$unwind: {path: "$actors"}}, {$match: {"actors.actor_id": result[0]["_id"]}}, {$unwind: {path: "$genres"}}, {
                    $facet: {
                        totalCount: [{$count: "value"}],
                        pipelineResults: [{$project: {_id: 1, genres: 1}}]
                    }
                }, {$unwind: {path: "$pipelineResults"}}, {$unwind: {path: "$totalCount"}}, {$replaceRoot: {newRoot: {$mergeObjects: ["$pipelineResults", {totalCount: "$totalCount.value"}]}}}, {
                    $group: {
                        _id: "$genres",
                        count: {$sum: 1},
                        totalCount: {$first: "$totalCount"}
                    }
                }, {
                    $project: {
                        "count": 1,
                        "totalCount": 1,
                        "percentage": {"$multiply": [{"$divide": [100, "$totalCount"]}, "$count"]}
                    }
                })
                    .toArray(function (err, resultFinal) {
                        if (err) throw err;
                        resultSend = [];
                        resultFinal.forEach(obj => {
                            resultSend.push({
                                "genre": obj["_id"],
                                "percentage": obj["count"] / obj["totalCount"] * 100
                            })
                        });
                        res.send(resultSend);
                        db.close()
                    })
            });
    });
});


// requete pour avoir tous les genres
app.get('/genre/all', function (req, res) {
    MongoClient.connect(uri, function (err, db) {
        if (err) throw err;
        var dbo = db.db("imdb");
        dbo.collection("movies").aggregate([
            {$unwind: "$genres"},
            {$group: {_id: "$genres"}}
        ])
            .toArray(function (err, resultFinal) {
                if (err) throw err;
                res.send(resultFinal);
                db.close()
            })
    });
});

// lancer le test de connexion
run();
// exposer le port 9292
app.listen(PORT);
console.log(`📡 Running on port ${PORT}`);
