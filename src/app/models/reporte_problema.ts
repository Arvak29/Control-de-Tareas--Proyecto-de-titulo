export class Reporte_problema {
    id_rp: number;
    nombre_rp: string;
    id_t: number;
    id_ts: number;
    id_ft: number;
  
    constructor(
      id_rp: number, 
      nombre_r: string,
      id_t: number, 
      id_ts: number,
      id_ft: number
    )
    {
      this.id_rp = id_rp;
      this.nombre_rp = nombre_rp;
      this.id_t = id_t;
      this.id_ts = id_ts;
      this.id_ft = id_ft;
    }
  }
  