import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  private item;
  private itemReviews;

  constructor(private activatedRoute: ActivatedRoute, 
              private itemsService: ItemsService) { }

  ngOnInit() {
    let itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.itemsService.getItemById(itemId).subscribe((data) => {
      this.item = data[0];
    })
    this.itemsService.getItemReviews(itemId).subscribe((data) => {
      this.itemReviews = data;
    })
  }

  ratingToStars(rating) {
    if (rating === null) {
      return {
        wholeStars: 0,
        halfStars: 0,
        borderStars: 5
      }
    } else {
      return {
        wholeStars: Math.floor(rating),
        halfStars: (rating % 1) > 0 ? 1 : 0,
        borderStars: (rating % 1) > 0 ? 4 - Math.floor(rating) : 5 - Math.floor(rating)
      }
    }
  }

}
