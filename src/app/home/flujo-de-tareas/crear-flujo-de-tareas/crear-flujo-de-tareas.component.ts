import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgregarFlujo, FlujoService } from 'src/app/services/flujo.service';

@Component({
  selector: 'app-crear-flujo-de-tareas',
  templateUrl: './crear-flujo-de-tareas.component.html',
  styleUrls: ['./crear-flujo-de-tareas.component.css'],
  providers: [FlujoService],
})
export class CrearFlujoDeTareasComponent implements OnInit {
  Crear_Flujo_de_tareas_Grupo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private FlujoService: FlujoService
  ) {
    this.Crear_Flujo_de_tareas_Grupo = this.fb.group({
      nombre_ft: ['', Validators.required],
      descripcion_ft: ['', Validators.required],
      fecha_inicio_ft: ['', Validators.required],
      fecha_entrega_ft: ['', Validators.required],
      porcentaje_avance_ft: ['', Validators.required],
      estado_ft: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  crear_flujo_de_tareas() {
    const Flujo: AgregarFlujo = {
      nombre_ft: this.Crear_Flujo_de_tareas_Grupo.get('nombre_ft')?.value,
      descripcion_ft: this.Crear_Flujo_de_tareas_Grupo.get('descripcion_ft')?.value,
      fecha_inicio_ft: this.Crear_Flujo_de_tareas_Grupo.get('fecha_inicio_ft')?.value,
      fecha_entrega_ft: this.Crear_Flujo_de_tareas_Grupo.get('fecha_entrega_ft')?.value,
      porcentaje_avance_ft: this.Crear_Flujo_de_tareas_Grupo.get('porcentaje_avance_ft')?.value,
      estado_ft: this.Crear_Flujo_de_tareas_Grupo.get('estado_ft')?.value,
    };
    this.FlujoService.addFlujo(Flujo).subscribe();

    console.log(Flujo);

    this.router.navigate(['/flujo_de_tareas']);
  }
}
