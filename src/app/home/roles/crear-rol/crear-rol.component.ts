import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Rol } from 'src/app/models/rol';
import { AgregarRol, rol, RolService } from '../../../services/rol.service';

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css'],
  providers: [RolService],
})
export class CrearRolComponent implements OnInit {
  Rol_Grupo: FormGroup;
  ListarRol: Rol[] = [];
  filtroRol = '';

  rol: rol = {
    id_r: '',
    nombre_r: '',
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
      nombre_r: this.Rol_Grupo.get('nombre_r')?.value,
    };
    this.RolService.addRol(ROL).subscribe();
    this.router.navigate(['/roles']);
  }

  agregar() {
    delete this.rol.id_r;

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
