import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PorcGlobalService {
  url = '/api-porc-global';
  constructor(private http: HttpClient) {}

  //get rol
  getPorcGlobal() {
    return this.http.get('/api-porc-global/getPorc_Global');
  }

  
  //agregar un rol
  addPorcGlobal(porcentajeglobal: AgregarPorcentajeGlobal) {
    return this.http.post('/api-porc-global/getPorc_Global', porcentajeglobal);
  }
}
  export interface PorcGlobal {
    avance_pg?: string;
  }

  export interface AgregarPorcentajeGlobal {
    avance_pg?: string;
  }

