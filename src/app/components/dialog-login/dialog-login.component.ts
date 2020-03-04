import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ItemsService } from '../../services/items.service';
import { AuthenticationService } from '../../services/authentication.service';
import { CookieService } from 'ngx-cookie-service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-login',
  templateUrl: './dialog-login.component.html',
  styleUrls: ['./dialog-login.component.css']
})
export class DialogLoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private itemsService: ItemsService,
              private authService: AuthenticationService,
              private cookieService: CookieService,
              public dialogRef: MatDialogRef<DialogLoginComponent>) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  ngOnInit() { }

  login() {
    if (this.loginForm.valid) {
      let body = this.loginForm.value;

      this.authService.login(body).subscribe((data) => {
        this.cookieService.set('CONGO_JWT', data.token)
        this.authService.getUserFromToken();
        this.dialogRef.close();
      })
    }
  }
}
