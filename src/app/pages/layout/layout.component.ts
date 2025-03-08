import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  masterSrv = inject(MasterService);
  router = inject(Router);

  onLogOff() {
    localStorage.removeItem("soilUser");
    this.router.navigate(['/login']);
  }

}
