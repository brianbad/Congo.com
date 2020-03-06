import { Component, OnInit } from '@angular/core';

import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public categories;

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.itemsService.getItemCategories().subscribe((data) => {
      this.categories = data;
    })
  }

  selectCategory(cat) {
    console.log(cat.categoryName);
  }

}
