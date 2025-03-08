import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
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

  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogin() {
    debugger;
    this.masterSrv.userLogin(this.loginObj).subscribe((res: any) => {
      if (res.result) {
        localStorage.setItem('soilUser', JSON.stringify(res.data));
        this.router.navigateByUrl('/dashboard');
      }
      else {
        alert(res.message);
      }
    })
  }


}
