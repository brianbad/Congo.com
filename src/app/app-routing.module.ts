import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { AccountDetailsComponent } from "./components/account-details/account-details.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},

  {path: "account-details", component: AccountDetailsComponent},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
