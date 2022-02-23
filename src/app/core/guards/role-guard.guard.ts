import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return true;
  }
  /* isAuthorized(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token: string | null = localStorage.getItem('token');
    const tokenPayload = JSON.parse(atob(token.split('.')[1]));
    return tokenPayload.role === expectedRole;
  } 
*/
}
