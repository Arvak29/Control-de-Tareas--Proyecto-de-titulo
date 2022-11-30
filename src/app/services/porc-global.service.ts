import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PorcGlobalService {
  url = '/api-porc-global';
  constructor(private http: HttpClient) {}

  //get de un porcentaje
  getPorcGlobales(id: string) {
    return this.http.get('/api-porc-global/getPorc_Globales/' + id);
  }
  
  //agregar un rol
  addPorcGlobal(porcentajeglobal: AgregarPorcentajeGlobal) {
    return this.http.post('/api-porc-global/getPorc_Global', porcentajeglobal);
  }
  //get de un porcentaje
  getVUI() {
    return this.http.get('/api-porc-global/getVista_Tareas_UI');
  }

  //get de un porcentaje
  getCargaTrabajo() {
    return this.http.get('/api-porc-global/getVista_Carga_trabajo/' );
  }

}
  export interface PorcGlobal {
    id_pg?: string;
    avance_pg?: string;
  }

  export interface AgregarPorcentajeGlobal {
    avance_pg?: string;
  }

  export interface VUI {
    nombre_ui?: string;
    contador_de_tareas?: string;
  }

  export interface CargaTrabajo {
    supervisor_c?: string;
    carga_trabajo?: string;
  }