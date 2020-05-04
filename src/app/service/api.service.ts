import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { ApiResponse } from '../models/system/api-response';
import { User } from '../models/actors/user';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  login(loginPayload: User): Observable<User> {
    console.log(JSON.stringify(loginPayload));
    return this.http.post<User>('http://10.0.2.2:8080/marketplace/login',
      JSON.stringify(loginPayload), this.httpOptions);
  }
}
