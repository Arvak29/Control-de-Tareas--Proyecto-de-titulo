export class Usuario {
    _id?: number;
    nombre: string;
    apellido: string;
    RUT: string;
    email: string;
    telefono: string;

    constructor(nombre:string,apellido: string,RUT:string,email:string,telefono:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.RUT = RUT;
        this.email = email;
        this.telefono = telefono;
    }
}