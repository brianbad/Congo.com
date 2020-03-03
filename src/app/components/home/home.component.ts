import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private loggedInUser: User;
  private users: User[];

  constructor(private usersServices: UsersService,
              private authenticationServices: AuthenticationService) {
  }

  ngOnInit() {
    // Retrieve the logged-in user.
    this.authenticationServices.getUserFromToken().subscribe((data) => {
      this.loggedInUser = data;
      console.log(this.loggedInUser);
    })

    // Retrieve all user data
    this.usersServices.getAllUsers().subscribe((data) => {
      this.users = data;
    })
  }
}

interface User {
  firstName: string,
  lastName: string,
  email: string,
  username: string
}
