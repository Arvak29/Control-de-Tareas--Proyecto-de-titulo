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
}
  export interface PorcGlobal {
    id_pg?: string;
    avance_pg?: string;
  }

  export interface AgregarPorcentajeGlobal {
    avance_pg?: string;
  }

