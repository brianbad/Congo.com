import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from "@angular/router";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private cookieService: CookieService ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
   }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login(this.loginForm.value).subscribe((data) => {
      this.cookieService.set('CONGO_JWT', data.token)
      this.router.navigateByUrl("/home");
    },
    (error) => {
      alert(error.error.message);
      console.log(error);
    });
  }

}
