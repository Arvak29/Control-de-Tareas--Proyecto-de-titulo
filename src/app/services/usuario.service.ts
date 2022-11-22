import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  url = '/api-usuario';
  constructor(private http: HttpClient) {}

  //get usuario
  getUsuarios() {
    return this.http.get('/api-usuario/getUsuarios');
  }

  //get un usuario
  getUsuario(id: string) {
    return this.http.get('/api-usuario/getUsuario/' + id);
  }

  //agregar un usuario
  addUsuario(usuario: AgregarUsuario) {
    return this.http.post(this.url, usuario);
  }

  //eliminar un usuario
  deleteUsuario(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  //modificar un usuario
  editUsuario(id: string, usuario: Usuario) {
    return this.http.put(this.url + '/' + id, usuario);
  }
}

export interface Usuario {
  id_u?: string;
  nombre_u?: string;
  email_u?: string;
  password_u?: string;
  id_c?: string;
  id_e?: string;
}

export interface AgregarUsuario {
  nombre_u?: string;
  email_u?: string;
  password_u?: string;
  id_c?: string;
  id_e?: string;
}
