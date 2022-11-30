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

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (this.authService.isAuth()) {
      console.log('Token no es valido o ya expiró');
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}
