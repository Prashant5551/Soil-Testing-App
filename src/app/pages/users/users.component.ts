import { Component, inject, signal } from '@angular/core';
import { ApiResponse, User, UserList } from '../../models/model';
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
  userList: UserList[] = [];

  showHideForm() {
    this.isNewFormVisible.set(!this.isNewFormVisible());
  }

  loadUsers() {
    this.masterSrv.getAllUsers().subscribe((res: ApiResponse) => {
      this.userList = res.data
    })
  }

  addUser() {
    this.masterSrv.createUser(this.userobj).subscribe((res: ApiResponse) => {
      if (res.result) {
        alert("User Created");
      } else {
        alert(res.message);
      }
    })
  }



}
