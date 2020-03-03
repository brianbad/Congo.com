import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  private loggedInUser;

  constructor(private cookieService: CookieService,
              private authService: AuthenticationService,
              private router: Router) { }

  /**
   * On initialization...
   * - Retrieve the logged in user.
   */
  ngOnInit() {
    this.authService.getUserFromToken().subscribe((data) => {
      this.loggedInUser = data;
    });
  }

  /**
   * Remove the site cookie and logged-in user.
   */
  logout() {
    this.cookieService.delete('CONGO_JWT');
    this.loggedInUser = undefined;
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
