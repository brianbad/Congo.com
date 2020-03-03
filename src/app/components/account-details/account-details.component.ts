import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthenticationService } from '../../services/authentication.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  private loggedInUser;

  private accountDetailsForm: FormGroup;

  constructor(private authService: AuthenticationService,
              private userService: UsersService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.authService.getUserFromToken().subscribe((data) => {
      this.loggedInUser = data;
      this.accountDetailsForm = new FormGroup({
        firstName: new FormControl(this.loggedInUser.firstName),
        lastName: new FormControl(this.loggedInUser.lastName),
        username: new FormControl({value: this.loggedInUser.username, disabled: true}),
        email: new FormControl(this.loggedInUser.email)
      });
    });
  }

  updateAccountDetails() {
    let body = this.accountDetailsForm.value;
    // Deleting the username field since users are not currently allowed to change their username.
    delete body['username'];

    this.userService.updateUser(this.loggedInUser.username, body).subscribe((data) => {
      this._snackBar.open(data.message, null, {
        duration: 2000
      });
    })
  }

}
