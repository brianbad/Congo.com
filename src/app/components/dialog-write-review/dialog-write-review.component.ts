import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthenticationService } from '../../services/authentication.service';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-dialog-write-review',
  templateUrl: './dialog-write-review.component.html',
  styleUrls: ['./dialog-write-review.component.css']
})
export class DialogWriteReviewComponent implements OnInit {
  public rating;
  public review;

  constructor(public dialogRef: MatDialogRef<DialogWriteReviewComponent>,
              public authService: AuthenticationService,
              public itemsService: ItemsService,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() { }

  confirmReview() {
    let body = {
      itemId: this.data.item.itemId,
      rating: this.rating,
      review: this.review,
      username: this.authService.getLoggedInUser().username
    }
    this.itemsService.reviewItem(body).subscribe((data) => {
      this.dialogRef.close();
    })
  }

}
