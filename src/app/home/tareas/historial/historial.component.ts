import { Component, OnInit } from '@angular/core';
import { Tareas } from 'src/app/models/tarea';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css'],
  providers: [TareaService],
})
export class HistorialComponent implements OnInit {
  ListarTarea: Tareas[] = [];

  constructor(private TareaService: TareaService) {}

  filtroTarea = '';

  ngOnInit(): void {
    this.listarTarea();
  }

  listarTarea() {
    this.TareaService.getTareas().subscribe(
      (res) => {
        console.log(res);
        this.ListarTarea = <any>res;
      },
      (err) => console.log(err)
    );
  }
}
