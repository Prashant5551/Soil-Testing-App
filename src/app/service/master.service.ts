import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  http=inject(HttpClient);

  constructor() { }

userLogin(obj:any){
  return this.http.post(`https://projectapi.gerasim.in/api/SoilTest/login`,obj);
}
}
