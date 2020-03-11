import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/index";
import { ApiResponse } from '../models/system/api-response';
import { User } from '../models/actors/user';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }


  login(loginPayload: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/', loginPayload);
  }

}
