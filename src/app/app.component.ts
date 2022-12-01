import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './services/auth.service';
import decode from 'jwt-decode';
import { UsuarioService, VistaUsuario } from 'src/app/services/usuario.service';
import { Notificacion, NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsuarioService],
})
export class AppComponent {
  ListarNotificacion: Notificacion[] = [];
  nombre = '';
  rol = '';
  cargo = '';
  ui = '';
  empresa = '';
  email = '';

  title = 'Control_de_tareas';

  constructor(
    public authService: AuthService,
    private router: Router,
    private UsuarioService: UsuarioService,
    private NotificacionService: NotificacionService
    ) {}

  ngOnInit(): void {
    this.listarNotificacion();
  }

  logOut() {
    localStorage.removeItem('token');
    window.location.reload();
  }

  listarNotificacion() {
    this.NotificacionService.getNotificaciones().subscribe({
      next: (res: any) => {
        this.ListarNotificacion = <any>res;
        console.log(this.ListarNotificacion);
      },
      error: (err) => console.log(err),
    });
  }

  sidebar() {
    console.log('hola');
    document.getElementById('layoutSidenav_nav')?.classList.toggle('active');
  }

  dataUser() {
    const token = localStorage.getItem('token');
    let decodetoken: any = [];
    decodetoken = decode(token!);
    this.nombre = decodetoken[1];
    this.rol = decodetoken[4];
    this.cargo = decodetoken[5];
    this.ui = decodetoken[6];
    this.empresa = decodetoken[7];
    this.email = decodetoken[2];
  }

  permisosFuncionario(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken[4] !== 'Funcionario') {
      return false;
    }
    return true;
  }
  permisosAdministrador(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken[4] !== 'Administrador') {
      return false;
    }
    return true;
  }
  permisosPanel(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken[4] === 'Administrador') {
      return true;
    }
    return false;
  }
  permisosTareas(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (
      decodetoken[4] === 'Administrador' ||
      decodetoken[4] === 'Funcionario' ||
      decodetoken[4] === 'Diseñador de procesos'
    ) {
      return true;
    }
    return false;
  }
  permisosUsuarios(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken[4] === 'Administrador'  ||
        decodetoken[4] === 'Funcionario'
    ) {
      return true;
    }
    return false;
  }
  permisosRoles(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken[4] === 'Administrador') {
      return true;
    }
    return false;
  }
  permisosFrujos(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (
      decodetoken[4] === 'Administrador' ||
      decodetoken[4] === 'Diseñador de procesos'
    ) {
      return true;
    }
    return false;
  }
  permisosUnidades(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken[4] === 'Administrador'
    
    ) {
      return true;
    }
    return false;
  }
}
