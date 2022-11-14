export class Usuario {
  id_u?: number;
  nombre_u: string;
  email_u: string;
  password_u: string;
  id_c: number;
  id_e: number;

  constructor(
    nombre_u: string,
    email_u: string,
    password_u: string,
    id_c: number,
    id_e: number
  ) 
  {
    this.nombre_u = nombre_u;
    this.email_u = email_u;
    this.password_u = password_u;
    this.id_c = id_c;
    this.id_e = id_e;
  }
}
