import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthenticationService } from '../../services/authentication.service';
import { ItemsService } from '../../services/items.service';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  private loading: Boolean = false;

  private myListings;

  private accountDetailsForm: FormGroup;

  constructor(private authService: AuthenticationService,
              private itemsService: ItemsService,
              private userService: UsersService,
              private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.accountDetailsForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl({value: '', disabled: true}),
      email: new FormControl('', Validators.compose([Validators.email, Validators.required]))
    });
  }

  loadMyListings() {
    this.itemsService.getItemsBySeller(this.authService.getLoggedInUser().username).subscribe((data) => {
      this.myListings = data;
    })
  }

  updateAccountDetails() {
    if (this.accountDetailsForm.valid) {
      this.loading = true;

      let body = this.accountDetailsForm.value;
      // Deleting the username field since users are not currently allowed to change their username.
      delete body['username'];
    
      this.userService.updateUser(this.authService.getLoggedInUser().username, body).subscribe((data) => {
        this.loading = false;
        this._snackBar.open(data.message, null, {
          duration: 2000
        });
      })
    }
  }

}
