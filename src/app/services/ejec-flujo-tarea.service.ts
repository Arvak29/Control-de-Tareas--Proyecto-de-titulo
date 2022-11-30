import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EjecFlujoTareaService {
  url = '/api-ejec-flujo-tarea';
  constructor(private http: HttpClient) {}

  //get una vista de ejecucion de flujo de tarea
  getVistaEjecFlujoTarea(id: string) {
    return this.http.get('/api-ejec-flujo-tarea/getVista_Ejec_Flujo_Tarea/' + id);
  }

  //agregar una ejecucion de flujo de tarea
  addEjecFlujoTarea(ejecflujotarea: AgregarEjecFlujoTarea) {
    return this.http.post('/api-ejec-flujo-tarea/addEjec_Flujo_T', ejecflujotarea);
  }

  //modificar una ejecucion de flujo de tarea
  editEjecFlujoTarea(id: string, ejecflujotarea: EjecFlujoTarea) {
    return this.http.patch('/api-ejec-flujo-tarea/updateEjec_Flujo_T/' + id, ejecflujotarea);
  }

  //eliminar una ejecucion de flujo de tarea
  deleteEjecFlujoTarea(id: string) {
    return this.http.delete('/api-ejec-flujo-tarea/DeleteEjec_Flujo_T/' + id);
  }
}

export interface EjecFlujoTarea {
  id_ft?: string;
  nombre_u?: string;
  nombre_ft?: string;
  respuesrespuesta_eftta_at?: string;
  justificacion_eft?: string;
  }
  
export interface VistaEjecFlujoTarea {
    id_u_eft?: string;
    id_ft_eft?: string;
    respuesta_eft?: string;
    justificacion_eft?: string;
  }

  export interface AgregarEjecFlujoTarea {
    id_u_eft?: number;
    id_ft_eft?: string;
    respuesta_eft?: string;
    justificacion_eft?: string;
  }
  