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

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getAllItems():Observable<any> {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/items", { headers: this.headers })
  }

  setHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
    })
  }
}
