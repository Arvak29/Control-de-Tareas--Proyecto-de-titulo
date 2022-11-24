import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgregarCargo, Cargo, CargoService } from '../../../services/cargo.service';
import { rol, RolService } from '../../../services/rol.service';
import { Unidad, UnidadInternaService } from '../../../services/unidad-interna.service';

@Component({
  selector: 'app-crear-cargo',
  templateUrl: './crear-cargo.component.html',
  styleUrls: ['./crear-cargo.component.css'],
  providers: [CargoService,RolService,UnidadInternaService],
})
export class CrearCargoComponent implements OnInit {
  Cargo_Grupo: FormGroup;
  ListarCargo: Cargo[] = [];
  ListarRol: rol[] = [];
  ListarUnidad: Unidad[] = [];
  filtroCargo = '';

  cargo: Cargo = {
    id_c: '',
    nombre_c: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private CargoService: CargoService,
    private RolService: RolService,
    private UnidadInternaService: UnidadInternaService
  ) {
    this.Cargo_Grupo = this.fb.group({
      nombre_c: ['', Validators.required],
      id_ui: ['', Validators.required],
      id_r: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarCargo();
    this.listarRol();
    this.listarUniadad();
  }

  listarCargo() {
    this.CargoService.getCargo().subscribe(
      (res) => {
        console.log(res);
        this.ListarCargo = <any>res;
      },
      (err) => console.log(err)
    );
  }
  listarRol() {
    this.RolService.getRol().subscribe({
      next: (res: any) => {
        this.ListarRol = <any>res;
      },
      error: (err) => console.log(err),
    });
  }
  listarUniadad() {
    this.UnidadInternaService.getUnidades().subscribe({
      next: (res: any) => {
        this.ListarUnidad = <any>res;
      },
      error: (err) => console.log(err),
    });
  }

  crear_cargo() {
    const CARGO: AgregarCargo = {
      nombre_c: this.Cargo_Grupo.get('nombre_c')?.value,
      id_ui: this.Cargo_Grupo.get('id_ui')?.value,
      id_r: this.Cargo_Grupo.get('id_r')?.value,
    };
    this.CargoService.addCargo(CARGO).subscribe();
    this.router.navigate(['/cargos']);
  }

  agregar() {
    delete this.cargo.id_c;

    this.CargoService.addCargo(this.cargo).subscribe();
    this.listarCargo();
  }

  eliminar(id: string) {
    this.CargoService.deleteCargo(id).subscribe(
      (res) => {
        console.log('Cargo eliminado');
        this.listarCargo();
      },
      (err) => console.log(err)
    );
  }

  modificar(id: number) {
    this.router.navigate(['/edit/' + id]);
  }
}
