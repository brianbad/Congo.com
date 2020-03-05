import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { Router } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit  {
  @Input() item;

  constructor(private router: Router) { }

  ngOnInit() { }

  /**
   * Naviagte to the view item page.
   */
  toViewItem() {
    this.router.navigateByUrl("view-item/" + this.item.itemId);
  }

  /**
   * Convert decimal number to array of full stars, half stars, and border stars
   * for rating display.
   * @param rating Double
   */
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
