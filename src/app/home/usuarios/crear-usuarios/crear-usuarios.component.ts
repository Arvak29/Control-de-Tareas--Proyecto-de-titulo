import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {

  Crear_Usuario_Grupo: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.Crear_Usuario_Grupo = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      RUT: ['', Validators.required],
      email: ['', Validators.required],
      telefono: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crear_usuario(){

    const USUARIO: Usuario = {
      nombre: this.Crear_Usuario_Grupo.get('nombre')?.value,
      apellido: this.Crear_Usuario_Grupo.get('apellido')?.value,
      RUT: this.Crear_Usuario_Grupo.get('RUT')?.value,
      email: this.Crear_Usuario_Grupo.get('email')?.value,
      telefono: this.Crear_Usuario_Grupo.get('telefono')?.value,
    }

    console.log(USUARIO);

    this.router.navigate(['/crear_usuario'])
  }
}
