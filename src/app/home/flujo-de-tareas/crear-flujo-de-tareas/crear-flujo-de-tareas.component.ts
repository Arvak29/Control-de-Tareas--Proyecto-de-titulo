import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flujo_De_Tareas } from 'src/app/models/flujo_tareas';

@Component({
  selector: 'app-crear-flujo-de-tareas',
  templateUrl: './crear-flujo-de-tareas.component.html',
  styleUrls: ['./crear-flujo-de-tareas.component.css']
})
export class CrearFlujoDeTareasComponent implements OnInit {

  Crear_Flujo_de_tareas_Grupo: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.Crear_Flujo_de_tareas_Grupo = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crear_flujo_de_tareas(){

    const FLUJO: Flujo_De_Tareas ={
      nombre: this.Crear_Flujo_de_tareas_Grupo.get('nombre')?.value,
      descripcion: this.Crear_Flujo_de_tareas_Grupo.get('descripcion')?.value,
    }

    console.log(FLUJO);

    this.router.navigate(['/flujo_de_tareas'])
  }
}
