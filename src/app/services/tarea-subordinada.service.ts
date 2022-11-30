import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TareaSubordinadaService {
  url = '/api-tarea-sub';
  constructor(private http: HttpClient) {}

  //get una vista tarea sub
  getVistaTareaSub(id: string) {
    return this.http.get(this.url + '/api-tarea-sub/getVista_Tarea_Sub/' + id);
  }

  //get tareas sub 
  getTareasSub() {
    return this.http.get('/api-tarea-sub/gettareas_sub/');
  }

  //get una tarea sub (listar)
  getTareaSub(id: string) {
    return this.http.get('/api-tarea-sub/get_Tarea_Sub/' + id);
  }

  getTareaSubPorFT(id: string) {
    return this.http.get('/api-tarea-sub/get_Tarea_Sub_Por_FT/' + id);
  }

  getTareaSubordinada(id: string) {
    return this.http.get('/api-tarea-sub/get_TareaSub/' + id);
    console.log(this.http)
  }

  //agregar una tarea sub
  addTareaSub(tarea: AgregarTareaSub) {
    return this.http.post('/api-tarea-sub/getTareas_Sub/', tarea);
  }

  addEjecucionTareaSub(tarea: EjecutarTareaSub) {
    return this.http.post('/api-tarea-sub/getTareas_Sub/', tarea);
  }

  //eliminar una tarea
  deleteTareasub(id: string) {
    return this.http.delete('/api-tarea-sub/deleteTarea_Sub/' + id);
  }

  //modificar una tarea
  editTarea(id: string, tarea: TareaSub) {
    return this.http.patch('/api-tarea-sub/UpdateTarea_Sub/' + id, tarea);
  }
}

export interface TareaSub {
  id_ts?: string;
  nombre_ts?: string;
  descripcion_ts?: string;
  fecha_inicio_ts?: string;
  fecha_entrega_ts?: string;
  fecha_entrega_efectiva_ts?: string;
  porcentaje_avance_ts?: string;
  estado_ts?: string;
  indicador_ts?: string;
  id_t?: string;
  id_ft?: string;
}

export interface VistaTareaSub {
  id_ts?: string;
  nombre_ts?: string;
  descripcion_ts?: string;
  fecha_inicio_ts?: string;
  fecha_entrega_ts?: string;
  fecha_entrega_efectiva_ts?: string;
  porcentaje_avance_ts: number;
  estado_ts?: string;
  indicador_ts?: string;
  id_t?: string;
  id_ft?: string;
}

export interface AgregarTareaSub {
  nombre_ts?: string;
  descripcion_ts?: string;
  fecha_entrega_ts?: string;
  porcentaje_avance_ts: number;
  estado_ts?: string;
  id_t?: string;
}

export interface EjecutarTareaSub {
  nombre_ts?: string;
  descripcion_ts?: string;
  fecha_entrega_ts?: string;
  porcentaje_avance_ts: number;
  estado_ts?: string;
  id_ft?: string;
}