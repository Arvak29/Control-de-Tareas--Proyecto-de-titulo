export class Tarea_sub {
  id_tarea_sub: string;
  nombre_tarea_sub: string;
  descripcion_sub: string;
  fecha_comienzo: string;
  fecha_entrega: string;
  id_responsable_sub: string;
  id_tarea: string;

  constructor(
    id_tarea_sub: string,
    nombre_tarea_sub: string,
    descripcion_sub: string,
    fecha_comienzo: string,
    fecha_entrega: string,
    id_responsable_sub: string,
    id_tarea: string
  ) {
    this.id_tarea_sub = id_tarea_sub;
    this.nombre_tarea_sub = nombre_tarea_sub;
    this.descripcion_sub = descripcion_sub;
    this.fecha_comienzo = fecha_comienzo;
    this.fecha_entrega = fecha_entrega;
    this.id_responsable_sub = id_responsable_sub;
    this.id_tarea = id_tarea;
  }
}
