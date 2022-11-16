import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-bar-tarea',
  templateUrl: './bar-tarea.component.html',
  styleUrls: ['./bar-tarea.component.css'],
  providers: [TareaService],
})
export class BarTareaComponent implements OnInit {
  @Input() titulo: string | undefined;
  @Input() cantidadResponsables: string | undefined;
  @Input() cantidadSubordinada: string | undefined;
  @Input() porcentaje: string | undefined;
  @Input() id: string | undefined;

  constructor(private router: Router, private TareaService: TareaService) {}

  ngOnInit(): void {}

  modificar(id = this.id) {
    this.router.navigate(['/tarea/' + id]);
  }
}
