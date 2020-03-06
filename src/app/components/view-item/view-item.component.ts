import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { ItemsService } from '../../services/items.service';

import { DialogWriteReviewComponent } from '../../components/dialog-write-review/dialog-write-review.component';



@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  private item;
  private itemReviews;

  constructor(private activatedRoute: ActivatedRoute, 
              private itemsService: ItemsService,
              public writeReviewDialog: MatDialog) { }

  ngOnInit() {
    this.getItemData();
  }

  getItemData() {
    let itemId = this.activatedRoute.snapshot.paramMap.get('id');
    this.itemsService.getItemById(itemId).subscribe((data) => {
      this.item = data[0];
    })
    this.itemsService.getItemReviews(itemId).subscribe((data) => {
      this.itemReviews = data;
    })
  }

  openReviewDialog() {
    const dialogRef = this.writeReviewDialog.open(DialogWriteReviewComponent, {
      data: {item: this.item}
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getItemData()
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
