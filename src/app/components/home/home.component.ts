import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUsername: string;
  loggedInUser: User;

  constructor(private activateRoute: ActivatedRoute,
              private usersServices: UsersService) { }

  ngOnInit() {
    this.activateRoute.params.subscribe((params) => {
      // Retrieve username from URL parameters (TODO: Find a different way to pass this)
      this.loggedInUsername = params.username;

      // Retrieve the full user object via username
      this.usersServices.getUser(this.loggedInUsername).subscribe((data) => {
        this.loggedInUser = data[0];
      })
    });
  }


}

interface User {
  firstName: string,
  lastName: string,
  email: string,
  username: string
}
