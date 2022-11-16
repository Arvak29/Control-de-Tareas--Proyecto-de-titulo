export class Tareas {
  id_t: string;
  nombre_t: string;
  descripcion_t: string;
  fecha_inicio_t: string;
  fecha_entrega_t: string;
  porcentaje_avance_t: string;
  estado_t: string;

  constructor(
    id_t: string,
    nombre_t: string,
    descripcion_t: string,
    fecha_inicio_t: string,
    fecha_entrega_t: string,
    porcentaje_avance_t: string,
    estado_t: string
  ) {
    this.id_t = id_t;
    this.nombre_t = nombre_t;
    this.descripcion_t = descripcion_t;
    this.fecha_inicio_t = fecha_inicio_t;
    this.fecha_entrega_t = fecha_entrega_t;
    this.porcentaje_avance_t = porcentaje_avance_t;
    this.estado_t = estado_t;
  }
}
