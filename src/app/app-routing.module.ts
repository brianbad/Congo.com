import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { AccountDetailsComponent } from "./components/account-details/account-details.component";
import { SearchComponent } from "./components/search/search.component";
import { ViewItemComponent } from "./components/view-item/view-item.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "account-details", component: AccountDetailsComponent},
  {path: "search", component: SearchComponent},
  {path: "view-item/:id", component: ViewItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
