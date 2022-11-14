export class Ejecucion_flujo_tarea {
  id_u_eft: number;
  id_ft_eft: number;
  respuesta_eft: string;
  justificacion_eft: string;

  constructor(
    id_u_eft: number,
    id_ft_eft: number,
    respuesta_eft: string,
    justificacion_eft: string
  ) 
  {
    this.id_u_eft = id_u_eft;
    this.id_ft_eft = id_ft_eft;
    this.respuesta_eft = respuesta_eft;
    this.justificacion_eft = justificacion_eft;
  }
}
  