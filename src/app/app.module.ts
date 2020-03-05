import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AccountDetailsComponent } from './components/account-details/account-details.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatButtonModule, MatMenuModule, MatFormFieldModule, 
         MatInputModule, MatSnackBarModule, MatCardModule,
         MatProgressSpinnerModule, MatSidenavModule, MatDialogModule, MatDialog } from '@angular/material';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DialogSellItemComponent } from './components/dialog-sell-item/dialog-sell-item.component';
import { SearchComponent } from './components/search/search.component';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ViewItemComponent } from './components/view-item/view-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AccountDetailsComponent,
    SideBarComponent,
    DialogSellItemComponent,
    SearchComponent,
    DialogLoginComponent,
    ItemCardComponent,
    ViewItemComponent
  ],
  entryComponents: [
    DialogSellItemComponent,
    DialogLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatDialogModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
