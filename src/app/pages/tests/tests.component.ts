import { Component, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MasterService } from '../../service/master.service';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  selector: 'app-tests',
  imports: [AsyncPipe, FormsModule],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.css'
})
export class TestsComponent {
  isNewTest: boolean = true;

  siteList$: Observable<any[]> = new Observable<any[]>;
  userList$: Observable<any> = new Observable<any>;
  testTypes$: Observable<any[]> = new Observable<any[]>;

  masterSrv = inject(MasterService);
  testObj: any = {
    "testId": 0,
    "siteId": 0,
    "engineerId": 0,
    "testTypeId": 0,
    "testDate": new Date(),
    "remarks": "",
    "approvalStatus": "",
    "createdDate": new Date(),
    "testName": ""
  }

  constructor() {
    this.siteList$ = this.masterSrv.GetSites();
    this.userList$ = this.masterSrv.getAllUsers().pipe(
      map((res: any) => res.data)
    );
    this.testTypes$ = this.masterSrv.getAllTestTypes();
  }

  toggleTestForm() {
    this.isNewTest = !this.isNewTest;
  }

  onSaveTest() {
    this.masterSrv.createTest(this.testObj).subscribe((res: any)=>{
      alert("test Created");
    }, error => {
      alert("API Error");
    })
  }
}
