import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import {
  AgregarTarea,
  Tarea,
  TareaService,
} from '../../services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [TareaService],
})
export class TareasComponent implements OnInit {
  Tarea_Grupo: FormGroup;
  ListarTarea: Tareas[] = [];

  tarea: Tarea = {
    id_tarea: '',
    nombre_tarea: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_termino: '',
    id_responsable: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private TareaService: TareaService
  ) {
    this.Tarea_Grupo = this.fb.group({
      nombre_tarea: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_termino: ['', Validators.required],
      id_responsable: ['', Validators.required],
    });
  }

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

  crear_tarea() {
    const TAREA: AgregarTarea = {
      nombre_tarea: this.Tarea_Grupo.get('nombre_tarea')?.value,
      descripcion: this.Tarea_Grupo.get('descripcion')?.value,
      fecha_inicio: this.Tarea_Grupo.get('fecha_inicio')?.value,
      fecha_termino: this.Tarea_Grupo.get('fecha_termino')?.value,
      id_responsable: this.Tarea_Grupo.get('id_responsable')?.value,
    };
    this.TareaService.addTarea(TAREA).subscribe();
    this.listarTarea();
  }

  agregar() {
    delete this.tarea.id_tarea;

    this.TareaService.addTarea(this.tarea).subscribe();
    this.listarTarea();
  }

  eliminar(id: string) {
    this.TareaService.deleteTarea(id).subscribe(
      (res) => {
        console.log('tarea eliminado');
        this.listarTarea();
      },
      (err) => console.log(err)
    );
  }

  modificar(id: number) {
    this.router.navigate(['/edit/' + id]);
  }
}
