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
export class RolGuard implements CanActivate {
  constructor(private authService: AuthService, public router: Router) {}

  canActivate(router: ActivatedRouteSnapshot): boolean {
    const expectedRole = router.data['expectedRole'];
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    console.log(decodetoken.rol);

    if (decodetoken.rol !== expectedRole) {
      console.log('Usuario no autorizado');
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
