import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {RolService} from '../services/rol.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[RolService],
})
export class LoginComponent implements OnInit {

  iniciar_formulario_Grupo: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private RolService:RolService ) {
    this.iniciar_formulario_Grupo = this.fb.group({
      email: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.listarRol();
  }

  iniciar_sesion(){
    console.log(this.iniciar_formulario_Grupo),
    console.log("Iniciar sesión")

    this.router.navigate(['/home'])
  }

  listarRol()
  {
    this.RolService.getRol().subscribe(
        res=>{
        console.log(res);
        this.listarRol=<any>res;
      },
      err => console.log(err)
    );
  }
}
