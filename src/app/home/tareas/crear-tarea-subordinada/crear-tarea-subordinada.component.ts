import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import { Tarea_sub } from 'src/app/models/tarea_subordinada';
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
  ListarTareaSub: Tarea_sub[] = [];

  tareaSub: TareaSub = {
    id_tarea_sub: '',
    nombre_tarea_sub: '',
    descripcion_sub: '',
    fecha_comienzo: '',
    fecha_entrega: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private TareaSubordinadaService: TareaSubordinadaService,
    private location: Location
  ) {
    this.TareaSub_formulario = this.fb.group({
      nombre_tarea_sub: ['', Validators.required],
      descripcion_sub: ['', Validators.required],
      fecha_comienzo: ['', Validators.required],
      fecha_entrega: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  irAtras() {
    this.location.back();
  }

  crear_tarea_sub() {
    const TAREASUB: AgregarTareaSub = {
      nombre_tarea_sub: this.TareaSub_formulario.get('nombre_tarea_sub')?.value,
      descripcion_sub: this.TareaSub_formulario.get('descripcion_sub')?.value,
      fecha_comienzo: this.TareaSub_formulario.get('fecha_comienzo')?.value,
      fecha_entrega: this.TareaSub_formulario.get('fecha_entrega')?.value,
    };
    this.TareaSubordinadaService.addTareaSub(TAREASUB).subscribe();
    this.router.navigate(['/tareas']);
  }

  agregar() {
    delete this.tareaSub.id_tarea_sub;

    this.TareaSubordinadaService.addTareaSub(this.tareaSub).subscribe();
  }
}
