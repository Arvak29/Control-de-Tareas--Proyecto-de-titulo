import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FLUJO } from 'src/app/models/flujo_tareas';
import {
  AgregarFlujo,
  Flujo,
  FlujoService,
} from 'src/app/services/flujo.service';

@Component({
  selector: 'app-flujo-de-tareas',
  templateUrl: './flujo-de-tareas.component.html',
  styleUrls: ['./flujo-de-tareas.component.css'],
  providers: [FlujoService],
})
export class FlujoDeTareasComponent implements OnInit {
  Flujo_Grupo: FormGroup;
  ListarFlujo: FLUJO[] = [];
  filtroFlujo = '';

  flujo: Flujo = {
    id_flujo: '',
    nombre_flujo: '',
    descripcion_flujo: '',
    fecha_comienzo: '',
    fecha_entrega: '',
    id_responsable_flujo: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private FlujoService: FlujoService
  ) {
    this.Flujo_Grupo = this.fb.group({
      nombre_flujo: ['', Validators.required],
      descripcion_flujo: ['', Validators.required],
      fecha_comienzo: ['', Validators.required],
      fecha_entrega: ['', Validators.required],
      id_responsable_flujo: ['', Validators.required],
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
      if (flujo.nombre_flujo.indexOf(arg) > -1) {
        resultado.push(flujo);
      }
    }
    return resultado;
  }

  crear_tarea() {
    const FLUJO: AgregarFlujo = {
      nombre_flujo: this.Flujo_Grupo.get('nombre_flujo')?.value,
      descripcion_flujo: this.Flujo_Grupo.get('descripcion_flujo')?.value,
      fecha_comienzo: this.Flujo_Grupo.get('fecha_comienzo')?.value,
      fecha_entrega: this.Flujo_Grupo.get('fecha_entrega')?.value,
      id_responsable_flujo: this.Flujo_Grupo.get('id_responsable_flujo')?.value,
    };
    this.FlujoService.addFlujo(FLUJO).subscribe();
    this.listarFlujo();
  }

  agregar() {
    delete this.flujo.id_flujo;

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
