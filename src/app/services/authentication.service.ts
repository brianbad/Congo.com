import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  API_BASE_URL: string = "http://10.0.0.210:3000";

  constructor(private http: HttpClient) { }

  login(body):Observable<any> {
    return this.http.post(this.API_BASE_URL + "/login", body);
  }
}
