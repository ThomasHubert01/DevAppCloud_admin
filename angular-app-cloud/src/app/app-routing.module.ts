import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
