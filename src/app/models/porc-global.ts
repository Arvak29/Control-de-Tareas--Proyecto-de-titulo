export class PorcGlobal {
    id_pg: string;
    avance_pg: string;
  
    constructor(
      id_pg: string,
      avance_pg: string,
    ) {
      this.id_pg = id_pg;
      this.avance_pg = avance_pg;
    }
  }

  export class VUI {
    nombre_ui: string;
    contador_de_tareas: string;
  
    constructor(
      nombre_ui: string,
      contador_de_tareas: string,
    ) {
      this.nombre_ui = nombre_ui;
      this.contador_de_tareas = contador_de_tareas;
    }
  }

  export class CargaTrabajo {
    supervisor_c: string;
    carga_trabajo: string;
  
    constructor(
      supervisor_c: string,
      carga_trabajo: string,
    ) {
      this.supervisor_c = supervisor_c;
      this.carga_trabajo = carga_trabajo;
    }
  }