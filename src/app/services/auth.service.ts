import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = '/api-usuario';
  user$: any;
  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  singin(user: any) {
    return this.http.post(this.url + '/singin', user);
  }

  isAuth(): boolean {
    const token = localStorage.getItem('token') || '';
    if (
      this.jwtHelper.isTokenExpired(token) ||
      !localStorage.getItem('token')
    ) {
      return false;
    }
    return true;
  }
}
