export class FLUJO {
  id_flujo: string;
  nombre_flujo: string;
  descripcion_flujo: string;
  fecha_comienzo: string;
  fecha_entrega: string;
  id_responsable_flujo: string;

  constructor(
    id_flujo: string,
    nombre_flujo: string,
    descripcion_flujo: string,
    fecha_comienzo: string,
    fecha_entrega: string,
    id_responsable_flujo: string
  ) {
    this.id_flujo = id_flujo;
    this.nombre_flujo = nombre_flujo;
    this.descripcion_flujo = descripcion_flujo;
    this.fecha_comienzo = fecha_comienzo;
    this.fecha_entrega = fecha_entrega;
    this.id_responsable_flujo = id_responsable_flujo;
  }
}
