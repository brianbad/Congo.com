import { Component, Input, Output, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { MatSidenav } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';

import { AuthenticationService } from '../../services/authentication.service';
import { ItemsService } from '../../services/items.service';

import { DialogSellItemComponent } from '../dialog-sell-item/dialog-sell-item.component';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  @Input() sidenav: MatSidenav
  @Input() sidenavOpened: Boolean;

  @Output() currentUserChanged: EventEmitter = new EventEmitter();

  constructor(private cookieService: CookieService,
              private authService: AuthenticationService,
              private itemsService: ItemsService,
              private router: Router,
              public sellItemDialog: MatDialog,
              public loginDialog: MatDialog) { }

  ngOnInit() { 
    this.authService.getUserFromToken();
  }

  /**
   * Open the sell item dialog window.
   */
  openSellItemDialog() {
    const dialogRef = this.sellItemDialog.open(DialogSellItemComponent);
  }

  /**
   * Open the login dialog window.
   */
  openLoginDialog() {
    const dialogRef = this.loginDialog.open(DialogLoginComponent);
    dialogRef.afterClosed().subscribe((then) => {
      this.currentUserChanged.emit("true");
    });
  }

  /**
   * Send the search term to the item service for query.
   * @param searchTerm 
   */
  searchItems(searchTerm: String) {
    searchTerm = searchTerm.replace(/ /g, "+");
    this.router.navigateByUrl("/search");
    this.itemsService.searchItems(searchTerm);
  }

  /**
   * Remove the site cookie and logged-in user.
   */
  logout() {
    this.cookieService.delete('CONGO_JWT');
    this.authService.setLoggedInUser(undefined);
  }

  /**
   * Redirect to the account details screen.
   */
  toAccountDetails() {
    this.router.navigateByUrl("/account-details");
  }

  /**
   * Redirect to the home screen.
   */
  toHome() {
    this.router.navigateByUrl("");
  }

}
