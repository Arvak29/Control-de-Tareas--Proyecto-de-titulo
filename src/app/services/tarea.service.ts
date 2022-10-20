import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  url = '/api-tarea';
  constructor(private http: HttpClient) {}

  //get tarea
  getTareas() {
    return this.http.get(this.url);
  }

  //get un tarea
  getTarea(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  //agregar un tarea
  addTarea(tarea: AgregarTarea) {
    return this.http.post(this.url, tarea);
  }

  //eliminar un tarea
  deleteTarea(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  //modificar un tarea
  editTarea(id: string, tarea: Tarea) {
    return this.http.put(this.url + '/' + id, tarea);
  }
}

export interface Tarea {
  id_tarea?: string;
  nombre_tarea?: string;
  descripcion?: string;
  fecha_inicio?: string;
  fecha_termino?: string;
  id_responsable?: string;
}

export interface AgregarTarea {
  nombre_tarea?: string;
  descripcion?: string;
  fecha_inicio?: string;
  fecha_termino?: string;
  id_responsable?: string;
}
