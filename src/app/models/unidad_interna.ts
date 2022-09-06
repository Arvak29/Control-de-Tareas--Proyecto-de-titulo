export class Unidad_Interna {
    _id?: number;
    nombre:string;
    descripcion:string;
    //Asignar rol?

    constructor(nombre:string,descripcion:string){
        this.nombre = nombre;
        this.descripcion = descripcion;
    }
}