import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../services/authentication.service';
import { CommonService } from '../../services/common.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private authService: AuthenticationService,
              private commonService: CommonService,
              private itemService: ItemsService) { }

  ngOnInit() {
    this.authService.getUserFromToken();
  }

  sortItems(e) {
    this.itemService.sortItems(e.target.value);
  }

}
