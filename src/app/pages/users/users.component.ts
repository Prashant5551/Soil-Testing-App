import { Component, inject, signal } from '@angular/core';
import { ApiResponse, User } from '../../models/model';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-users',
  imports: [FormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  userobj: User = new User();
  masterSrv = inject(MasterService);
  isNewFormVisible = signal<boolean>(false);

  showHideForm() {
    this.isNewFormVisible.set(!this.isNewFormVisible());
  }

  loadUsers(){
    
  }

  addUser() {
    this.masterSrv.createUser(this.userobj).subscribe((res: ApiResponse) => {
      if (res.result) {
        alert("User Created");
      }else{
        alert(res.message);
      }
    })
  }



}
