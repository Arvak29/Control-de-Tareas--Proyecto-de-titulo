import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css']
})

export class CrearTareaComponent implements OnInit {

  Tarea_formulario: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.Tarea_formulario = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crear_tarea(){

    const TAREA:  Tareas = {
      nombre: this.Tarea_formulario.get('nombre')?.value,
      descripcion: this.Tarea_formulario.get('descripcion')?.value,
    }

    console.log(TAREA);

    this.router.navigate(['/tareas'])
  }

}
