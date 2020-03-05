import { Component, OnInit, Input } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { MatDialog } from '@angular/material/dialog';
import { DialogViewItemComponent } from '../dialog-view-item/dialog-view-item.component';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit  {
  @Input() item;

  constructor(public viewItemDialog: MatDialog) { }

  ngOnInit() {
  }

  openViewItemDialog() {
    const dialogRef = this.viewItemDialog.open(DialogViewItemComponent, {
      data: this.item
    });
  }

}
