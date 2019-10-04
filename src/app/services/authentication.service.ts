import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  API_BASE_URL: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  login(body) {
    return this.http.post(this.API_BASE_URL + "/login", body);
  }
}
