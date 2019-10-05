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

  constructor(private http: HttpClient,
              private cookieService: CookieService) { }

  getUser(username: string):Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.cookieService.get('CONGO_JWT')
    })
    return this.http.get(this.API_BASE_URL + "/users/" + username, { headers: headers })
  }
}
