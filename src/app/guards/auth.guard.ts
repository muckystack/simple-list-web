import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _router: Router, private _authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const localToken = localStorage.getItem('token');

    const isAuth = state.url == '/auth' || state.url == '/auth/register';

    if (localToken == undefined && this._authService.token == '' && !isAuth)
      this._router.navigate(['auth']);

    if (localToken != undefined) this._authService.token = localToken;

    if (localToken != undefined && isAuth) this._router.navigate(['categories']);

    return true;
  }
}
