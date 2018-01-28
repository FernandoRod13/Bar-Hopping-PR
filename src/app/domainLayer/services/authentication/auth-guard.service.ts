import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService} from './authentication.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor( private auth: AuthenticationService, private router: Router ) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.auth.authState) {
      return true;
    }
    this.auth.url = url;
    this.router.navigate(['/login']);
    return false;
  }

}
