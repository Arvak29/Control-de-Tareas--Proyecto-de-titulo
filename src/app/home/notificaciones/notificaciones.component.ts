import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Notificacion, NotificacionService } from 'src/app/services/notificacion.service';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {
  ListarNotificacion: Notificacion[] = [];
  
  constructor(
    private router: Router,
    private NotificacionService: NotificacionService
  ) { }
  ngOnInit(): void {
    this.listarNotificacion();
  }

  listarNotificacion() {
    this.NotificacionService.getNotificaciones().subscribe({
      next: (res: any) => {
        this.ListarNotificacion = <any>res;
      },
      error: (err) => console.log(err),
    });
  }
}
