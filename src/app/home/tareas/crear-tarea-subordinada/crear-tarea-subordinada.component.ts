import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import { Tarea_subordinada } from 'src/app/models/tarea_subordinada';
import {
  AgregarTareaSub,
  TareaSub,
  TareaSubordinadaService,
} from 'src/app/services/tarea-subordinada.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-crear-tarea-subordinada',
  templateUrl: './crear-tarea-subordinada.component.html',
  styleUrls: ['./crear-tarea-subordinada.component.css'],
  providers: [TareaSubordinadaService],
})
export class CrearTareaSubordinadaComponent implements OnInit {
  TareaSub_formulario: FormGroup;
  ListarTareaSub: Tarea_subordinada[] = [];

  tareaSub: TareaSub = {
    id_ts: '',
    nombre_ts: '',
    descripcion_ts: '',
    fecha_inicio_ts: '',
    fecha_entrega_ts: '',
    fecha_entrega_efectiva_ts: '',
    porcentaje_avance_ts: '',
    estado_ts: '',
    indicador_ts: '',
    id_t: '',
    id_ft: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private TareaSubordinadaService: TareaSubordinadaService,
    private location: Location
  ) {
    this.TareaSub_formulario = this.fb.group({
      nombre_ts: ['', Validators.required],
      descripcion_ts: ['', Validators.required],
      fecha_inicio_ts: ['', Validators.required],
      fecha_entrega_ts: ['', Validators.required],
      porcentaje_avance_ts: ['', Validators.required],
      estado_ts: ['', Validators.required],
      id_t: ['', Validators.required],
      id_ft: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  irAtras() {
    this.location.back();
  }

  crear_tarea_sub() {
    const TAREASUB: AgregarTareaSub = {
      nombre_ts: this.TareaSub_formulario.get('nombre_ts')?.value,
      descripcion_ts: this.TareaSub_formulario.get('descripcion_ts')?.value,
      fecha_entrega_ts: this.TareaSub_formulario.get('fecha_entrega_ts')?.value,
      porcentaje_avance_ts: this.TareaSub_formulario.get('porcentaje_avance_ts')
        ?.value,
      estado_ts: this.TareaSub_formulario.get('estado_ts')?.value,
      id_t: this.TareaSub_formulario.get('id_t')?.value,
    };
    this.TareaSubordinadaService.addTareaSub(TAREASUB).subscribe();
    this.router.navigate(['/tareas']);
  }

  // agregar() {
  //   delete this.tareaSub.id_ft;

  //   this.TareaSubordinadaService.addTareaSub(this.tareaSub).subscribe();
  // }
}
