import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flujo_tarea } from 'src/app/models/flujo_tareas';
import {AgregarFlujo, Flujo, FlujoService} from 'src/app/services/flujo.service';

@Component({
  selector: 'app-flujo-de-tareas',
  templateUrl: './flujo-de-tareas.component.html',
  styleUrls: ['./flujo-de-tareas.component.css'],
  providers: [FlujoService],
})
export class FlujoDeTareasComponent implements OnInit {
  Flujo_Grupo: FormGroup;
  ListarFlujo: Flujo_tarea[] = [];
  filtroFlujo = '';

  flujo: Flujo = {
    id_ft: '',
    nombre_ft: '',
    descripcion_ft: '',
    fecha_inicio_ft: '',
    fecha_entrega_ft: '',
    porcentaje_avance_ft: '',
    estado_ft: ''
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private FlujoService: FlujoService
  ) {
    this.Flujo_Grupo = this.fb.group({
      nombre_ft: ['', Validators.required],
      descripcion_ft: ['', Validators.required],
      fecha_inicio_ft: ['', Validators.required],
      fecha_entrega_ft: ['', Validators.required],
      porcentaje_avance_ft: ['', Validators.required],
      estado_ft: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.listarFlujo();
  }

  listarFlujo() {
    this.FlujoService.getFlujos().subscribe(
      (res) => {
        console.log(res);
        this.ListarFlujo = <any>res;
      },
      (err) => console.log(err)
    );
  }
  transform(value: any, arg: any): any {
    const resultado = [];
    for (const flujo of value) {
      if (flujo.nombre_ft.indexOf(arg) > -1) {
        resultado.push(flujo);
      }
    }
    return resultado;
  }

  crear_tarea() {
    const Flujo: AgregarFlujo = {
      nombre_ft: this.Flujo_Grupo.get('nombre_ft')?.value,
      descripcion_ft: this.Flujo_Grupo.get('descripcion_ft')?.value,
      fecha_inicio_ft: this.Flujo_Grupo.get('fecha_inicio_ft')?.value,
      fecha_entrega_ft: this.Flujo_Grupo.get('fecha_entrega_ft')?.value,
      porcentaje_avance_ft: this.Flujo_Grupo.get('porcentaje_avance_ft')?.value,
      estado_ft: this.Flujo_Grupo.get('estado_ft')?.value
    };
    this.FlujoService.addFlujo(Flujo).subscribe();
    this.listarFlujo();
  }

  agregar() {
    delete this.flujo.id_ft;

    this.FlujoService.addFlujo(this.flujo).subscribe();
    this.listarFlujo();
  }

  eliminar(id: string) {
    this.FlujoService.deleteFlujo(id).subscribe(
      (res) => {
        console.log('tarea eliminado');
        this.listarFlujo();
      },
      (err) => console.log(err)
    );
  }

  modificar(id: number) {
    this.router.navigate(['/edit/' + id]);
  }
}
