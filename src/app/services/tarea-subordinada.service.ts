import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TareaSubordinadaService {
  url = '/api-tarea-sub';
  constructor(private http: HttpClient) {}

  //get tarea
  getTareasSub() {
    return this.http.get(this.url);
  }

  //get un tarea
  getTareaSub(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  //agregar un tarea
  addTareaSub(tarea: AgregarTareaSub) {
    return this.http.post(this.url, tarea);
  }

  //eliminar un tarea
  deleteTarea(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  //modificar un tarea
  editTarea(id: string, tarea: TareaSub) {
    return this.http.put(this.url + '/' + id, tarea);
  }
}

export interface TareaSub {
  id_tarea_sub?: string;
  nombre_tarea_sub?: string;
  descripcion_sub?: string;
  fecha_comienzo?: string;
  fecha_entrega?: string;
  id_responsable_sub?: string;
  id_tarea?: string;
}

export interface AgregarTareaSub {
  nombre_tarea_sub?: string;
  descripcion_sub?: string;
  fecha_comienzo?: string;
  fecha_entrega?: string;
  id_responsable_sub?: string;
  id_tarea?: string;
}
