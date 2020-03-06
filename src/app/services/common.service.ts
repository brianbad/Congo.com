import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private API_BASE_URL: String = environment.apiBaseUrl;
  private headers: HttpHeaders;

  private categories;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  /**
   * Retrieve the list of categories from the server
   */
  fetchCategories() {
    this.setHeaders();
    this.http.get(this.API_BASE_URL + "/common/categories", { headers: this.headers }).subscribe((categories) => {
      this.setCategories(categories);
    });
  }

  /**
   * Get the list of categories that is stored in the service
   */
  getCategories() {
    return this.categories;
  }

  /**
   * Set the list of categories that is stored in the service
   * @param categories The category list
   */
  setCategories(categories) {
    this.categories = categories;
  }

  /**
   * Get the categoryName for the corresponding categoryId
   * @param id The categoryId
   */
  getCategoryName(id) {
    let filtered = this.getCategories().filter(item => item.categoryId === id);
    if (filtered) {
      return filtered[0].categoryName;
    }
    return "Undefined";
  }

  /**
   * Set the request headers
   */
  setHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
    })
  }
}
