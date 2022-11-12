export class Usuario {
  id_usuario?: number;
  nombre_usuario: string;
  email_usuario: string;
  password_usuario: string;
  rol: string;

  constructor(
    nombre_usuario: string,
    email_usuario: string,
    password_usuario: string,
    rol: string
  ) {
    this.nombre_usuario = nombre_usuario;
    this.email_usuario = email_usuario;
    this.password_usuario = password_usuario;
    this.rol = rol;
  }
}
