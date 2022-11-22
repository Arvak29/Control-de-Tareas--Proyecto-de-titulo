import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UnidadInternaService {
  constructor(private http: HttpClient) {}

  //get unidad
  getUnidades() {
    return this.http.get('/api-unidad/getUSIS');
  }

  //get un unidad
  getUnidad(id: string) {
    return this.http.get('/api-unidad/getUI/' + id);
  }

  //agregar un unidad
  addUnidad(unidad: AgregarUnidad) {
    return this.http.post('/api-unidad/addUI', unidad);
  }

  //eliminar un unidad
  deleteUnidad(id: string) {
    return this.http.delete('/api-unidad/deleteUI/' + id);
  }

  //modificar un unidad
  editUnidad(id: string, unidad: Unidad) {
    return this.http.patch('/api-unidad/UpdateUI/' + id, unidad);
  }
}

export interface Unidad {
  id_ui?: string;
  nombre_ui?: string;
}

export interface AgregarUnidad {
  id_ui?: string;
  nombre_ui?: string;
}
