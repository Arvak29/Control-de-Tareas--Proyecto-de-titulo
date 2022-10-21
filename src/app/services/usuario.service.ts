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
    return this.http.get(this.url);
  }

  //get un usuario
  getUsuario(id: string) {
    return this.http.get(this.url + '/' + id);
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
  id_usuario?: string;
  nombre_usuario?: string;
  email_usuario?: string;
  password_usuario?: string;
  id_rol?: string;
}

export interface AgregarUsuario {
  nombre_usuario?: string;
  email_usuario?: string;
  password_usuario?: string;
}
