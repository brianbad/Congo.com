import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  API_BASE_URL: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(body):Observable<any> {
    return this.http.post(this.API_BASE_URL + "/login", body);
  }
}
