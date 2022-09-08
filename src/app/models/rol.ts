export class Roles {
    id_rol: number;
    nombre: string;
    //Asignar unidad interna?

    constructor(id_rol:number, nombre:string){
        this.id_rol = id_rol;
        this.nombre = nombre;
    }
}

export class AddRoles {
    nombre: string;
    //Asignar unidad interna?

    constructor(nombre:string){
        this.nombre = nombre;
    }
}