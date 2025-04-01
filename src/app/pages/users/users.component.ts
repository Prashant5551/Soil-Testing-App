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

  ngOnInit() {
    this.loadUsers();
  }

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
        this.loadUsers();
      } else {
        alert(res.message);
      }
    })
  }

  onEdit(data: User) {
    this.userobj = data;
    this.showHideForm();
  }

  onUpdateUser() {
    this.masterSrv.updateUser(this.userobj).subscribe((res: ApiResponse) => {
      if (res.result) {
        alert("User Updated");
        this.loadUsers();
      } else {
        alert(res.message);
      }
    })
  }

  onDelete(id: number) {
    const isDelete = confirm("Are you Sure you want to Delete?");
    if (isDelete == true) {
      this.masterSrv.deleteUserById(id).subscribe((res: ApiResponse)=>{
        if (res.result) {
          alert("User Deleted");
          this.loadUsers();
        } else {
          alert(res.message)
        }
      })
    }
  }

}
