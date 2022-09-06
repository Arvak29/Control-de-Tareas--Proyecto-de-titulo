import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from 'src/app/models/rol';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  Rol_Grupo: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.Rol_Grupo = this.fb.group({
      nombre: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crear_rol(){

    const ROL: Roles = {
      nombre: this.Rol_Grupo.get('nombre')?.value,
    }

    console.log(ROL);

  }

}
