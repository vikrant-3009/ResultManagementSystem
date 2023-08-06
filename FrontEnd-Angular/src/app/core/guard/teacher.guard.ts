import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { RoutePersistenceService } from '../service/route-persistence.service';

@Injectable({
  providedIn: 'root'
})
export class TeacherGuard implements CanActivateChild {

  constructor(private routePersistenceService: RoutePersistenceService) { }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      return this.routePersistenceService.getTeacherLoggedIn() === "true" ? true : false;
  }
  
}
