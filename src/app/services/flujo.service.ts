import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FlujoService {
  url = '/api-flujo';
  constructor(private http: HttpClient) {}

  //get flujo
  getFlujos() {
    return this.http.get('/api-flujo-tarea/getFlujosTareas');
  }

  //get un flujo
  getFlujo(id: string) {
    return this.http.get('/api-flujo-tarea/getFlujoTarea/' + id);
  }

  //agregar un flujo
  addFlujo(flujo: AddFlujo) {
    return this.http.post('/api-flujo-tarea/addFlujo_Tarea', flujo);
  }

  //eliminar un flujo
  deleteFlujo(id: string) {
    return this.http.delete('/api-flujo-tarea/deleteFlujo_Tarea/' + id);
  }

  //modificar un flujo
  editFlujo(id: string, flujo: Flujo) {
    return this.http.patch('/api-flujo/UpdateFlujoTarea/' + id, flujo);
  }
}

export interface Flujo {
  id_ft?: string;
  nombre_ft?: string;
  descripcion_ft?: string;
  fecha_inicio_ft?: string;
  fecha_entrega_ft?: string;
  porcentaje_avance_ft?: string;
  estado_ft: string;
}

export interface AgregarFlujo {
  nombre_ft?: string;
  descripcion_ft?: string;
  fecha_inicio_ft?: string;
  fecha_entrega_ft?: string;
  porcentaje_avance_ft?: string;
  estado_ft: string;
}

export interface AddFlujo {
  nombre_ft?: string;
  descripcion_ft?: string;
}