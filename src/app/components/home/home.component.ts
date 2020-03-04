import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private popularItems;

  constructor(private authService: AuthenticationService,
              private itemService: ItemsService) { }

  ngOnInit() {
    this.authService.getUserFromToken();
    this.itemService.getPopularItems().subscribe((data) => {
      this.popularItems = data;
    })
  }

}
