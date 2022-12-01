import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NotificacionService {
  url = '/api-notificacion';
  constructor(private http: HttpClient) {}

  //get notificaciones
  getNotificacion(id:string) {
    return this.http.get('/api-notificacion/getNotificacion/' + id);
  }

  //get notificaciones
  getNotificaciones() {
    return this.http.get('/api-notificacion/getNotificaciones');
  }
}

export interface Notificacion {
  id_n?: string;
  asunto_n?: string;
  descripcion_n?: string;
  id_u?: string;
}

