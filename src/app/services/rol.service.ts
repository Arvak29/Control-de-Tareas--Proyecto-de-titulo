import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RolService {
  url = '/api-rol';
  constructor(private http: HttpClient) {}

  //get rol
  getRol() {
    return this.http.get(this.url);
  }

  //get un rol
  getUnRol(id: string) {
    return this.http.get(this.url + '/' + id);
  }

  //agregar un rol
  addRol(rol: AgregarRol) {
    return this.http.post(this.url, rol);
  }

  //eliminar un rol
  deleteRol(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  //modificar un rol
  editRol(id: string, rol: Rol) {
    return this.http.put(this.url + '/' + id, rol);
  }
}

export interface Rol {
  id_rol?: string;
  nombre?: string;
}

export interface AgregarRol {
  nombre?: string;
}
