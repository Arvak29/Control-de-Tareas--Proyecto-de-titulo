import { Component, OnInit } from '@angular/core';
import { Notificacion, NotificacionService } from 'src/app/services/notificacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css'],
  providers: [NotificacionService],
})
export class NotificacionComponent implements OnInit {
  id_entrada: string = "";

  notificacion: Notificacion = {
    id_n: '',
    asunto_n: '',
    descripcion_n: '',
    id_u: ''
  };
  constructor(
    private router: Router,
    private NotificacionService: NotificacionService,
    private activeRouter: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(this.id_entrada)

    if (this.id_entrada) {
      this.NotificacionService.getNotificacion(this.id_entrada).subscribe({
        next: (res: any) => {
          this.notificacion = <any>res[0];
        },
      });
    }
  }
}
