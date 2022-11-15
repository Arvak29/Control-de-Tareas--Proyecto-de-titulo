export class Flujo_tarea {
  id_ft: number;
  nombre_ft: string;
  descripcion_ft: string;
  fecha_inicio_ft: string;
  fecha_entrega_ft: string;
  porcentaje_avance_ft: number;
  estado_ft: string;

  constructor(
    id_ft: number,
    nombre_ft: string,
    descripcion_ft: string,
    fecha_inicio_ft: string,
    fecha_entrega_ft: string,
    porcentaje_avance_ft: number,
    estado_ft: string
  ) 
  {
    this.id_ft = id_ft;
    this.nombre_ft = nombre_ft;
    this.descripcion_ft = descripcion_ft;
    this.fecha_inicio_ft = fecha_inicio_ft;
    this.fecha_entrega_ft = fecha_entrega_ft;
    this.porcentaje_avance_ft = porcentaje_avance_ft;
    this.estado_ft = estado_ft
  }
}
