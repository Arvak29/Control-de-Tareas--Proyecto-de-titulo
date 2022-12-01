export class Notificacion {
    id_n: number;
    asunto_n: string;
    nombre_n: string;
    id_u: number;
  
    constructor(
      id_n: number, 
      asunto_n: string,
      nombre_n: string,
      id_u: number
    )
    {
      this.id_n = id_n;
      this.asunto_n = asunto_n;
      this.nombre_n = nombre_n;
      this.id_u = id_u;
    }
  }
  