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
    return this.http.get(this.url);
  }

  //get un flujo
  getFlujo(id: string) {
    return this.http.get(this.url + '/' + id);
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
  id_flujo?: string;
  nombre_flujo?: string;
  descripcion_flujo?: string;
  fecha_comienzo?: string;
  fecha_entrega?: string;
  id_responsable_flujo?: string;
}

export interface AgregarFlujo {
  nombre_flujo?: string;
  descripcion_flujo?: string;
  fecha_comienzo?: string;
  fecha_entrega?: string;
  id_responsable_flujo?: string;
}
