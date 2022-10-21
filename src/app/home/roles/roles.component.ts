import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Roles } from 'src/app/models/rol';
import { AgregarRol, Rol, RolService } from '../../services/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers: [RolService],
})
export class RolesComponent implements OnInit {
  Rol_Grupo: FormGroup;
  ListarRol: Roles[] = [];
  filtroRol = '';

  rol: Rol = {
    id_rol: '',
    nombre: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private RolService: RolService
  ) {
    this.Rol_Grupo = this.fb.group({
      nombre: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarRol();
  }

  listarRol() {
    this.RolService.getRol().subscribe(
      (res) => {
        console.log(res);
        this.ListarRol = <any>res;
      },
      (err) => console.log(err)
    );
  }

  crear_rol() {
    const ROL: AgregarRol = {
      nombre: this.Rol_Grupo.get('nombre')?.value,
    };
    this.RolService.addRol(ROL).subscribe();
    this.listarRol();
  }

  agregar() {
    delete this.rol.id_rol;

    this.RolService.addRol(this.rol).subscribe();
    this.listarRol();
  }

  eliminar(id: number) {
    this.RolService.deleteRol(id).subscribe(
      (res) => {
        console.log('rol eliminado');
        this.listarRol();
      },
      (err) => console.log(err)
    );
  }

  modificar(id: number) {
    this.router.navigate(['/edit/' + id]);
  }
}
