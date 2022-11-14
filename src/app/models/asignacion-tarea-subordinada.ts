export class asignacion_tarea_subordinada {
  id_u_ats: number;
  id_ts_ats: number;
  respuesta_ats: string;
  justificacion_ats: string;

  constructor(
    id_u_ats: number,
    id_ts_ats: number,
    respuesta_ats: string,
    justificacion_ats: string
  ) 
  {
    this.id_u_ats = id_u_ats;
    this.id_ts_ats = id_ts_ats;
    this.respuesta_ats = respuesta_ats;
    this.justificacion_ats = justificacion_ats;
  }
}
  