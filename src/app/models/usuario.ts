export class Usuario {
  id_usuario?: number;
  nombre_usuario: string;
  email_usuario: string;
  password_usuario: string;

  constructor(
    nombre_usuario: string,
    email_usuario: string,
    password_usuario: string
  ) {
    this.nombre_usuario = nombre_usuario;
    this.email_usuario = email_usuario;
    this.password_usuario = password_usuario;
  }
}
