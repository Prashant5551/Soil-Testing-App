import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, User } from '../models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http = inject(HttpClient);
  loggedUserData: any;

  apiUrl: string = 'https://projectapi.gerasim.in/api/SoilTest/';

  constructor() {
    const loggedData = localStorage.getItem('soilUser');
    if (loggedData != null) {
      this.loggedUserData = JSON.parse(loggedData);
      console.log(this.loggedUserData, '............')
    }
  }

  userLogin(obj: any) {
    return this.http.post(this.apiUrl + "login", obj);
  }

  createUser(obj:User) :Observable<ApiResponse>{
    return this.http.post<ApiResponse>(`${this.apiUrl}AddnewUser`,obj)
  }
}
