import { Component, OnInit } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'congo';
  private sidenavOpened: Boolean = false;

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.fetchCategories();
  }
}
