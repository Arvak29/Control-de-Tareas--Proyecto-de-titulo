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
      nombre_flujo: ['', Validators.required],
      descripcion_flujo: ['', Validators.required],
      fecha_comienzo: ['', Validators.required],
      fecha_entrega: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  crear_flujo_de_tareas() {
    const FLUJO: AgregarFlujo = {
      nombre_flujo: this.Crear_Flujo_de_tareas_Grupo.get('nombre_flujo')?.value,
      descripcion_flujo:
        this.Crear_Flujo_de_tareas_Grupo.get('descripcion_flujo')?.value,
      fecha_comienzo:
        this.Crear_Flujo_de_tareas_Grupo.get('fecha_comienzo')?.value,
      fecha_entrega:
        this.Crear_Flujo_de_tareas_Grupo.get('fecha_entrega')?.value,
    };
    this.FlujoService.addFlujo(FLUJO).subscribe();

    console.log(FLUJO);

    this.router.navigate(['/flujo_de_tareas']);
  }
}
