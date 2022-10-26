import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = '';
  rol = '';
  title = 'Control_de_tareas';

  constructor(public authService: AuthService, private router: Router) {}

  logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  dataUser() {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    this.nombre = decodetoken.nombre_usuario;
    this.rol = decodetoken.rol;
  }

  permisosFuncionario(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken.rol !== 'Funcionario') {
      return false;
    }
    return true;
  }
  permisosAdministrador(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken.rol !== 'Administrador') {
      return false;
    }
    return true;
  }
}
