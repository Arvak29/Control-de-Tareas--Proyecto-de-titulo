import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgregarRol, rol, RolService } from '../../../services/rol.service';


@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css'],
  providers: [RolService],

})
export class CrearRolComponent implements OnInit {
  Rol_Grupo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private RolService: RolService,
    private router: Router,
    ) {
      this.Rol_Grupo = this.fb.group({
        nombre_r: ['', Validators.required],
      });
     }

  ngOnInit(): void {
  }

  crear_cargo() {
    const CARGO: AgregarRol = {
      nombre_r: this.Rol_Grupo.get('nombre_r')?.value,
    };
    this.RolService.addRol(CARGO).subscribe();
    this.router.navigate(['/roles']);
  }

}
