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

  createUser(obj: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}AddnewUser`, obj)
  }

  getAllUsers(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.apiUrl}GetAllUsers`)
  }

  updateUser(obj: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}UpdateUser`, obj)
  }

  deleteUserById(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(`${this.apiUrl}DeleteUserByUserId?userId=${id}`)
  }

  createNewSite(obj: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}CreateNewSites`, obj)
  }

  GetSites(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}GetSites`)
  }

  getAllTestTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}GetAllTestTypes`)
  }

  createTest(obj: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}CreateTest`, obj)
  }

}

