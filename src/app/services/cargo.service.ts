import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  url = '/api-cargo';
  constructor(private http: HttpClient) {}

  //get cargo
  getCargo() {
    return this.http.get('/api-cargo/getCargos');
  }

  //get un cargo
  getUnCargo(id: string) {
    return this.http.get('/api-cargo/getCargo/' + id);
  }

  //agregar un cargo
  addCargo(cargo: AgregarCargo) {
    return this.http.post('/api-cargo/addCargo/', cargo);
  }

  //modificar un cargo
  editCargo(id: string, cargo: Cargo) {
    return this.http.patch('/api-cargo/updateCargo/' + id, cargo);
  }

  //eliminar un cargo
  deleteCargo(id: string) {
    return this.http.delete('/api-cargo/deleteCargo/' + id);
  }
}

export interface Cargo {
  id_c?: string;
  nombre_c?: string;
  id_ui?: string;
  id_r?: string;
}

export interface AgregarCargo {
  nombre_c?: string;
  id_ui?: string;
  id_r?: string;
}