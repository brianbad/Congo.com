import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ItemsService } from '../../services/items.service';
import { AuthenticationService } from '../../services/authentication.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog-view-item',
  templateUrl: './dialog-view-item.component.html',
  styleUrls: ['./dialog-view-item.component.css']
})
export class DialogViewItemComponent implements OnInit {

  constructor(private itemsService: ItemsService,
              private authService: AuthenticationService,
              public dialogRef: MatDialogRef<DialogViewItemComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { 
  }

  ngOnInit() { }
}
