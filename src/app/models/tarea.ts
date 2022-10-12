export class Tareas {
  _id?: number;
  nombre: string;
  descripcion: string;
  fecha_inicio: string;
  fecha_termino: string;
  //Asignar tarea?

  constructor(
    nombre: string,
    descripcion: string,
    fecha_inicio: string,
    fecha_termino: string
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fecha_inicio = fecha_inicio;
    this.fecha_termino = fecha_termino;
  }
}
