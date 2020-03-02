import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_BASE_URL: string = environment.apiBaseUrl;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
  })

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getUser(username: string):Observable<any> {
    return this.http.get(this.API_BASE_URL + "/users/" + username, { headers: this.headers })
  }

  getAllUsers():Observable<any> {
    return this.http.get(this.API_BASE_URL + "/users", { headers: this.headers })
  }
}
