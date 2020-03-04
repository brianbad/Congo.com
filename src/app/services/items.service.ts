import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private API_BASE_URL: string = environment.apiBaseUrl;
  private headers: HttpHeaders;

  private items;

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getAllItems() {
    this.setHeaders();
    this.http.get(this.API_BASE_URL + "/items", { headers: this.headers }).subscribe((data) => {
      this.setItems(data);
    })
  }

  searchItems(searchTerm) {
    this.setHeaders();
    this.http.get(this.API_BASE_URL + "/items/search?query=" + searchTerm, { headers: this.headers }).subscribe((data) => {
      this.setItems(data);
    })
  }

  getItems() {
    return this.items;
  }

  setItems(data) {
    this.items = data;
  }

  setHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
    })
  }
}
