export class Tarea_subordinada {
  id_ts: string;
  nombre_ts: string;
  descripcion_ts: string;
  fecha_inicio_ts: string;
  fecha_entrega_ts: string;
  porcentaje_avance_ts: number;
  estado_ts: string;
  id_t: string;
  id_ft: string;

  constructor(
    id_ts: string,
    nombre_ts: string,
    descripcion_ts: string,
    fecha_inicio_ts: string,
    fecha_entrega_ts: string,
    porcentaje_avance_ts: number,
    estado_ts: string,
    id_t: string,
    id_ft: string
  ) 
  {
    this.id_ts = id_ts;
    this.nombre_ts = nombre_ts;
    this.descripcion_ts = descripcion_ts;
    this.fecha_inicio_ts = fecha_inicio_ts;
    this.fecha_entrega_ts = fecha_entrega_ts;
    this.porcentaje_avance_ts = porcentaje_avance_ts;
    this.estado_ts = estado_ts;
    this.id_t = id_t;
    this.id_ft = id_ft;
  }
}
