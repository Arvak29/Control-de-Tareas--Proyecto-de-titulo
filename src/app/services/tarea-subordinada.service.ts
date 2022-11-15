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
  deleteTareasub(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  //modificar un tarea
  editTarea(id: string, tarea: TareaSub) {
    return this.http.put(this.url + '/' + id, tarea);
  }
}

export interface TareaSub {
  id_ts?: string;
  nombre_ts?: string;
  descripcion_ts?: string;
  fecha_inicio_ts?: string;
  fecha_entrega_ts?: string;
  porcentaje_avance_ts: number; //no se como cambiar un numero xD
  estado_ts?: string;
  id_t?: string;
  id_ft?: string;
}

export interface AgregarTareaSub {
  nombre_ts?: string;
  descripcion_ts?: string;
  fecha_inicio_ts?: string;
  fecha_entrega_ts?: string;
  porcentaje_avance_ts: number; //no se como cambiar un numero xD
  estado_ts?: string;
  id_t?: string;
  id_ft?: string;
}
