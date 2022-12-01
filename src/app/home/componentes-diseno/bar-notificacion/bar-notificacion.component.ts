import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-notificacion',
  templateUrl: './bar-notificacion.component.html',
  styleUrls: ['./bar-notificacion.component.css'],
})
export class BarNotificacionComponent implements OnInit {
  @Input() Titulo: string | undefined;
  @Input() Descripcion: string | undefined;
  @Input() id: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  modificar(id = this.id) {
    this.router.navigate(['/notificacion/' + id]);
  }
}
