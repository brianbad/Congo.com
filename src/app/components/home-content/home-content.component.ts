import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private itemService: ItemsService) { }

  ngOnInit() {
    this.authService.getUserFromToken();
    this.itemService.getAllItems();
  }

}
