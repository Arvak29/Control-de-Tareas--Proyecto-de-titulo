import { Component, OnInit } from '@angular/core';
import { Notificacion, NotificacionService } from 'src/app/services/notificacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css'],
  providers: [NotificacionService],
})
export class NotificacionComponent implements OnInit {
  ListarNotificacion: Notificacion[] = [];
  notificacion: Notificacion = {
    id_n: '',
    asunto_n: '',
    descripcion_n: '',
    id_u: ''
  };
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
