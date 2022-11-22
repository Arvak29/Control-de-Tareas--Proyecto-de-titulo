import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) {}

  //get cargo
  getEmpresa() {
    return this.http.get('/api-empresa/getEmpresas');
  }

  //get un cargo
  getUnEmpresa(id: string) {
    return this.http.get('/getEmpresa/' + id);
  }

  //agregar un cargo
  addEmpresa(cargo: AgregarEmpresa) {
    return this.http.post('/addEmpresa/', cargo);
  }

  //eliminar un cargo
  deleteEmpresa(id: number) {
    return this.http.delete('/deleteEmpresa/' + id);
  }

  //modificar un cargo
  editEmpresa(id: string, cargo: Empresa) {
    return this.http.patch('/UpdateEmpresa/' + id, cargo);
  }
}

export interface Empresa {
  id_e?: string;
  nombre_e?: string;
}

export interface AgregarEmpresa {
  nombre_c?: string;
}