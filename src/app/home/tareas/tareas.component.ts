import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import { AgregarTarea, Tarea, TareaService} from '../../services/tarea.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'],
  providers: [TareaService],
})
export class TareasComponent implements OnInit {
  Tarea_Grupo: FormGroup;
  ListarTarea: Tareas[] = [];
  filtroTarea = '';

  tarea: Tarea = {
    id_t: '',
    nombre_t: '',
    descripcion_t: '',
    fecha_inicio_t: new Date,
    fecha_entrega_t: new Date,
    porcentaje_avance_t: '',
    estado_t: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private TareaService: TareaService
  ) {
    this.Tarea_Grupo = this.fb.group({
      nombre_t: ['', Validators.required],
      descripcion_t: ['', Validators.required],
      fecha_inicio_t: ['', Validators.required],
      fecha_entrega_t: ['', Validators.required],
      porcentaje_avance_t: ['', Validators.required],
      estado_t: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarTarea();
  }

  listarTarea() {
    this.TareaService.getTareas().subscribe({
      next: (res: any) => {
        this.ListarTarea = <any>res;
      },
      error: (err) => console.log(err),
    });
  }

  transform(value: any, arg: any): any {
    const resultado = [];
    for (const tarea of value) {
      if (tarea.nombre_tarea.indexOf(arg) > -1) {
        resultado.push(tarea);
      }
    }
    return resultado;
  }

  crear_tarea() {
    const TAREA: AgregarTarea = {
      nombre_t: this.Tarea_Grupo.get('nombre_t')?.value,
      descripcion_t: this.Tarea_Grupo.get('descripcion_t')?.value,
      fecha_inicio_t: this.Tarea_Grupo.get('fecha_inicio_t')?.value,
      fecha_entrega_t: this.Tarea_Grupo.get('fecha_entrega_t')?.value,
    };
    this.TareaService.addTarea(TAREA).subscribe();
    this.listarTarea();
  }

  agregar() {
    delete this.tarea.id_t;

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
