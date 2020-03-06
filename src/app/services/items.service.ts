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
  private lastSearchTerm;

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getItemRating(itemId) {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/item/" + itemId + "/rating", { headers: this.headers });
  }

  getItemReviews(itemId) {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/item/" + itemId + "/reviews", { headers: this.headers });
  }

  getItemsBySeller(username) {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/items/fromSeller/" + username, { headers: this.headers });
  }

  getAllItems() {
    this.setHeaders();
    this.http.get(this.API_BASE_URL + "/items", { headers: this.headers }).subscribe((data) => {
      this.setItems(data);
    })
  }

  getItemById(itemId) {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/item/" + itemId, { headers: this.headers });
  }

  getPopularItems() {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/items/random/4", { headers: this.headers });
  }

  createItem(body) {
    this.setHeaders();
    return this.http.post(this.API_BASE_URL + "/items/create", body, { headers: this.headers });
  }

  reviewItem(body) {
    this.setHeaders();
    return this.http.post(this.API_BASE_URL + "/item/review", body, { headers: this.headers });
  }

  searchItems(searchTerm) {
    this.setHeaders();
    this.http.get(this.API_BASE_URL + "/items/search?query=" + searchTerm, { headers: this.headers }).subscribe((data) => {
      this.lastSearchTerm = searchTerm;
      this.setItems(data);
    })
  }

  sortItems(property) {
    this.setItems(this.getItems().sort(this.dynamicSort(property)));
  }

  /**
   * Sorts JSON based on specific Key, and Asc or Desc
   * @param property 
   */
  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
  }

  getItems() {
    return this.items;
  }

  setItems(data) {
    this.items = data;
  }

  getLastSearchTerm() {
    return this.lastSearchTerm;
  }

  setLastSearchTerm(data) {
    this.lastSearchTerm = data;
  }

  setHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
    })
  }
}
