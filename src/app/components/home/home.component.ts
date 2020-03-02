import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUsername: string;
  loggedInUser: User;

  users: User[];

  constructor(private usersServices: UsersService,
              private authenticationServices: AuthenticationService) { }

  ngOnInit() {
    this.authenticationServices.getUserFromToken().subscribe((data) => {
      let username = data.username;
      // Retrieve the full user object via username
      this.usersServices.getUser(username).subscribe((data) => {
        this.loggedInUser = data[0];
      })
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
