import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { ItemsService } from '../../services/items.service';
import { AuthenticationService } from '../../services/authentication.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-sell-item',
  templateUrl: './dialog-sell-item.component.html',
  styleUrls: ['./dialog-sell-item.component.css']
})
export class DialogSellItemComponent implements OnInit {

  public newItemForm: FormGroup;

  constructor(private itemsService: ItemsService,
              private authService: AuthenticationService,
              public dialogRef: MatDialogRef<DialogSellItemComponent>) { 
    this.newItemForm = new FormGroup({
      itemName: new FormControl('', Validators.required),
      itemDescription: new FormControl('This is a test description', Validators.required),
      itemPrice: new FormControl('', Validators.required),
      imageFilename: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  confirmSellItem(e) {
    if (this.newItemForm.valid) {
      let body = this.newItemForm.value;
      body["seller"] = this.authService.getLoggedInUser().username;

      this.itemsService.createItem(body).subscribe((data) => {
        this.itemsService.getAllItems();
        this.dialogRef.close();
      })
    }
  }
}
