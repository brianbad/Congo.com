import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { ItemsService } from '../../services/items.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{

  constructor(private itemsService: ItemsService,
              private commonService: CommonService,
              private router: Router) { }

  /**
   * Select a category from the side bar
   */
  selectCategory(cat) {
    // Set the new active category
    this.itemsService.setSelectedCategoryId(cat.categoryId);

    // If a search has been entered, search that term again within the new category. Otherwise search all.
    if (this.itemsService.getLastSearchTerm()) {
      this.itemsService.searchItems(this.itemsService.getLastSearchTerm());
    } else {
      this.itemsService.searchItems("");
    }

    // Navigate to the search page
    this.router.navigateByUrl("/search");
  }

}
