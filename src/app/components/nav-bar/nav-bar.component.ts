import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private cookieService: CookieService,
              private authService: AuthenticationService,
              private itemsService: ItemsService,
              private router: Router) { }

  ngOnInit() { }

  /**
   * Send the search term to the item service for query.
   * @param searchTerm 
   */
  searchItems(searchTerm) {
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
   * Redirect to the login screen.
   */
  toLogin() {
    this.router.navigateByUrl("/login");
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
    this.router.navigateByUrl("/home");
  }

}
