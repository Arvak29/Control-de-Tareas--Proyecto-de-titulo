import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FlujoService {
  url = '/api-flujo';
  constructor(private http: HttpClient) {}

  //get flujo
  getFlujos() {
    return this.http.get('/api-flujo/getFlujosTareas');
  }

  //get un flujo
  getFlujo(id: string) {
    return this.http.get('/api-flujo/getFlujoTarea/' + id);
  }

  //agregar un flujo
  addFlujo(flujo: AgregarFlujo) {
    return this.http.post(this.url, flujo);
  }

  //eliminar un flujo
  deleteFlujo(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  //modificar un flujo
  editFlujo(id: string, flujo: Flujo) {
    return this.http.put(this.url + '/' + id, flujo);
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
