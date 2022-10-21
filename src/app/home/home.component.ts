import { Component, OnInit } from '@angular/core';
import { Tareas } from '../models/tarea';
import { TareaService } from '../services/tarea.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TareaService],
})
export class HomeComponent implements OnInit {
  ListarTarea: Tareas[] = [];
  constructor(private TareaService: TareaService) {}

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
