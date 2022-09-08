import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  iniciar_formulario_Grupo: FormGroup;

  constructor(private fb: FormBuilder, 
              private router: Router) {
    this.iniciar_formulario_Grupo = this.fb.group({
      email: ['', Validators.required],
      contraseña: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  iniciar_sesion(){
    console.log(this.iniciar_formulario_Grupo),
    console.log("Iniciar sesión")

    this.router.navigate(['/home'])
  }


}
