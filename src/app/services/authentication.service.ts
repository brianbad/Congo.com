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

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  login(body):Observable<any> {
    this.setHeaders();
    return this.http.post(this.API_BASE_URL + "/login", body);
  }

  getUserFromToken():Observable<any> {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/getUserFromToken", { headers: this.headers });
  }

  setHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
    })
  }
}
