export class Reporte_problema {
    id_rp: number;
    asunto_rp: string;
    descripcion_rp: string;

  
    constructor(
      id_rp: number, 
      asunto_rp: string,
      descripcion_rp: string,

    )
    {
      this.id_rp = id_rp;
      this.asunto_rp = asunto_rp;
      this.descripcion_rp = descripcion_rp;

    }
  }
  