import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private API_BASE_URL: String = environment.apiBaseUrl;
  private headers: HttpHeaders;

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getUser(username: String):Observable<any> {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/users/" + username, { headers: this.headers })
  }

  updateUser(username: String, body: object):Observable<any> {
    this.setHeaders();
    return this.http.put(this.API_BASE_URL + "/users/update/" + username, body, { headers: this.headers })
  }

  getAllUsers():Observable<any> {
    this.setHeaders();
    return this.http.get(this.API_BASE_URL + "/users", { headers: this.headers })
  }

  setHeaders() {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
    })
  }
}
