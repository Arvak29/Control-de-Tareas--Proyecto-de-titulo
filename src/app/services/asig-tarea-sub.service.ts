import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AsigTareaSubService {
  url = '/api-asig-tarea-sub';
  constructor(private http: HttpClient) {}

  //get una vista de asignacion de tarea subordinada
  getVistaAsigTareaSub(id: string) {
    return this.http.get('/api-asig-tarea-sub/getVista_Asig_Tarea_Sub/' + id);
  }
  //get una vista de asignacion de tarea subordinada (NUEVO) 
  getVistaAsigTareasSub(id: string) {
    return this.http.get('/api-asig-tarea-sub/getAsig_Tarea_Sub_t/' + id);
  }

  //agregar una asignacion subordinada (este)
  addAsigTareaSub(asigtareasub: AgregarAsigTareaSub) {
    return this.http.post('/api-asig-tarea-sub/addAsig_Tarea_Sub/', asigtareasub);
  }

  //modificar una asignacion subordinada
  editAsigTareaSub(id: string, asigtareasub: AsigTareaSub) {
    return this.http.patch('/api-asig-tarea-sub/updateAsig_Tarea/' + id, asigtareasub);
  }

  //eliminar una asignacion subordinada
  deleteTareaSub(id: string) {
    return this.http.delete('/api-asig-tarea-sub/deleteAsig_Tarea_Sub/' + id);
  }
}

export interface AsigTareaSub {
    id_u_ats?: string;
    id_ts_ats?: string;
    respuesta_ats?: string;
    justificacion_ats?: string;
  }
  
export interface VistaAsigTareaSub {
    id_u_ats?: string;
    id_ts_ats?: string;
    respuesta_ats?: string;
    justificacion_ats?: string;
  }

  export interface AgregarAsigTareaSub {
    id_u_ats?: string;
    id_ts_ats?: string;
    respuesta_ats?: string;
    justificacion_ats?: string;
  }