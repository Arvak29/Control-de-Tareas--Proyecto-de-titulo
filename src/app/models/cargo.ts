export class Cargo {
  id_c: string;
  nombre_c: string;
  supervisor_c: string;
  id_ui: number;
  id_r: number;

  constructor(
    id_c: string,
    nombre_c: string,
    supervisor_c: string,
    id_ui: number,
    id_r: number
  ) 
  {
    this.id_c = id_c;
    this.nombre_c = nombre_c;
    this.supervisor_c = supervisor_c;
    this.id_ui = id_ui;
    this.id_r = id_r;
  }
}
  