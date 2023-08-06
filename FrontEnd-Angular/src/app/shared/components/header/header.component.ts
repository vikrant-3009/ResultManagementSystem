import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePersistenceService } from 'src/app/core/service/route-persistence.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activateLogoutBtn: boolean = false;

  constructor(private routePersistenceService: RoutePersistenceService, private router: Router) { }

  ngOnInit(): void {
    if(this.routePersistenceService.getStudentLoggedIn() === "true" || this.routePersistenceService.getTeacherLoggedIn() === "true") {
      this.activateLogoutBtn = true;
    }
    else {
      this.activateLogoutBtn = false;
    }
  }

  onLogout() {
    this.routePersistenceService.clearRoutes();
    this.router.navigateByUrl("/");
  }

}
