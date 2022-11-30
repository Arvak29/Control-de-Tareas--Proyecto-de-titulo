import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddFlujo, AgregarFlujo, FlujoService } from 'src/app/services/flujo.service';

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
      descripcion_ft: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  crear_flujo_de_tareas() {
    const Flujo: AddFlujo = {
      nombre_ft: this.Crear_Flujo_de_tareas_Grupo.get('nombre_ft')?.value,
      descripcion_ft:this.Crear_Flujo_de_tareas_Grupo.get('descripcion_ft')?.value,
    };
    this.FlujoService.addFlujo(Flujo).subscribe();
    this.router.navigate(['/flujo_de_tareas']);
  }
}
