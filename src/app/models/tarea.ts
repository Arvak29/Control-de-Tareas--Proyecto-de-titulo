export class Tareas {
  id_tarea: number;
  nombre_tarea: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_termino: string;
  id_responsable: string;

  constructor(
    id_tarea: number,
    nombre_tarea: string,
    descripcion: string,
    fecha_inicio: string,
    fecha_termino: string,
    id_responsable: string
  ) 
  {
    this.id_tarea = id_tarea;
    this.nombre_tarea = nombre_tarea;
    this.descripcion = descripcion;
    this.fecha_inicio = fecha_inicio;
    this.fecha_termino = fecha_termino;
    this.id_responsable = id_responsable;
  }
}
