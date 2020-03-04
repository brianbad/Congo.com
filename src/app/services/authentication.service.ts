import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_BASE_URL: string = environment.apiBaseUrl;
  private headers: HttpHeaders;

  private loggedInUser;

  constructor(private http: HttpClient,
              private cookieService: CookieService) { 
  }

  login(body):Observable<any> {
    this.setHeaders();
    return this.http.post(this.API_BASE_URL + "/login", body);
  }

  getUserFromToken() {
    this.setHeaders();
    this.http.get(this.API_BASE_URL + "/getUserFromToken", { headers: this.headers }).subscribe((data) => {
      this.setLoggedInUser(data);
    })
  }

  getLoggedInUser() {
    return this.loggedInUser;
  }

  setLoggedInUser(user) {
    this.loggedInUser = user;
  }

  setHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
    })
  }
}
