import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterService } from '../../service/master.service';
import { ApiResponse } from '../../models/model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sites',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './sites.component.html',
  styleUrl: './sites.component.css'
})
export class SitesComponent {
  isNewFormVisible: boolean = false;
  masterSrv = inject(MasterService);
  siteList$:Observable<any[]> =new Observable<any[]>;

  siteForm: FormGroup = new FormGroup({
    siteId: new FormControl("0"),
    siteName: new FormControl(""),
    location: new FormControl(""),
    clientName: new FormControl(""),
    weatherConditions: new FormControl(""),
    createdDate: new FormControl(new Date())
  })

  constructor(){
    this.siteList$=this.masterSrv.GetSites();
  }

  changeView() {
    this.isNewFormVisible = !this.isNewFormVisible;
  }

  onSave() {
    const formValue = this.siteForm.value;
    this.masterSrv.createNewSite(formValue).subscribe((res: ApiResponse) => {
      alert("Site Created");
    }, error => {
      alert("Error from API");
    }
    )
  }
}
