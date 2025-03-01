import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // userName: SoilTestAdmin,
  // role: SuperAdmin,
  // password: admin

  loginObj: any = {
    "userName": '',
    "password": ''
  }

}
