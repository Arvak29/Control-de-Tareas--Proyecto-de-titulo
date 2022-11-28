import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AsigTareaService {
  url = '/api-asig-tarea';
  constructor(private http: HttpClient) {}

  //get una vista de asignacion de tarea
  getVistaAsigTarea(id: string) {
    return this.http.get('/api-asig-tarea/getVista_Asig_Tarea/' + id);
  }
  //get una vista de asignacion de tarea (NUEVO)
  getAsigTarea(id: string) {
    return this.http.get('/api-asig-tarea/getAsig_Tarea_t/' + id);
  }

  //agregar una asignacion
  addAsigTarea(asigtarea: AgregarAsigTarea) {
    return this.http.post('/api-asig-tarea/addAsig_Tarea/', asigtarea);
  }

  //modificar una asignacion
  editAsigTarea(id: string, asigtarea: AsigTarea) {
    return this.http.patch('/api-asig-tarea/updateAsig_Tarea/' + id, asigtarea);
  }

  //eliminar una asignacion
  deleteAsigTarea(id: string) {
    return this.http.delete('/api-asig-tarea/deleteAsig_Tarea/' + id);
  }
}

export interface AsigTarea {
  id_t?: string;
  nombre_u?: string;
  nombre_t?: string;
  respuesta_at?: string;
  justificacion_at?: string;
}
  
export interface VistaAsigTarea {
  id_u_at?: string;
  id_t_at?: string;
  respuesta_at?: string;
  justificacion_at?: string;
}

export interface AgregarAsigTarea {
  id_u_at?: string;
  id_t_at?: string;
  respuesta_at?: string;
  justificacion_at?: string;
}
  