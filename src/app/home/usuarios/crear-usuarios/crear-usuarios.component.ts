import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AgregarUsuario,
  UsuarioService,
} from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css'],
  providers: [UsuarioService],
})
export class CrearUsuariosComponent implements OnInit {
  Crear_Usuario_Grupo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private UsuarioService: UsuarioService
  ) {
    this.Crear_Usuario_Grupo = this.fb.group({
      nombre_usuario: ['', Validators.required],
      email_usuario: ['', Validators.required],
      password_usuario: ['', Validators.required],
      rol: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  crear_usuario() {
    const USUARIO: AgregarUsuario = {
      nombre_usuario: this.Crear_Usuario_Grupo.get('nombre_usuario')?.value,
      email_usuario: this.Crear_Usuario_Grupo.get('email_usuario')?.value,
      password_usuario: this.Crear_Usuario_Grupo.get('password_usuario')?.value,
      rol: this.Crear_Usuario_Grupo.get('rol')?.value,
    };
    this.UsuarioService.addUsuario(USUARIO).subscribe();
    this.router.navigate(['/usuarios']);
  }
}
