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

  ngOnInit() {
    this.authService.getUserFromToken().subscribe((data) => {
      this.loggedInUser = data;
    });
  }

  logout() {
    this.cookieService.delete('CONGO_JWT');
    this.loggedInUser = undefined;
  }

  toLogin() {
    this.router.navigateByUrl("/login");
  }

}
