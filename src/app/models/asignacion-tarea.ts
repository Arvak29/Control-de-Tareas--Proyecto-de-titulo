export class asignacion_tarea {
  id_u_at: number;
  id_t_at: number;
  respuesta_at: string;
  justificacion_at: string;

  constructor(
    id_u_at: number,
    id_t_at: number,
    respuesta_at: string,
    justificacion_at: string
  ) 
  {
    this.id_u_at = id_u_at;
    this.id_t_at = id_t_at;
    this.respuesta_at = respuesta_at;
    this.justificacion_at = justificacion_at;
  }
}
  