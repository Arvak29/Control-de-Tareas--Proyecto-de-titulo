import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cargo } from 'src/app/models/cargo';
import { AgregarCargo, cargo, CargoService } from '../../../services/cargo.service';

@Component({
  selector: 'app-crear-cargo',
  templateUrl: './crear-cargo.component.html',
  styleUrls: ['./crear-cargo.component.css'],
  providers: [CargoService],
})
export class CrearCargoComponent implements OnInit {
  Cargo_Grupo: FormGroup;
  ListarCargo: Cargo[] = [];
  filtroCargo = '';

  cargo: cargo = {
    id_c: '',
    nombre_c: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private CargoService: CargoService
  ) {
    this.Cargo_Grupo = this.fb.group({
      nombre_c: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarCargo();
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

  crear_cargo() {
    const CARGO: AgregarCargo = {
      nombre_c: this.Cargo_Grupo.get('nombre_c')?.value,
    };
    this.CargoService.addCargo(CARGO).subscribe();
    this.router.navigate(['/cargos']);
  }

  agregar() {
    delete this.cargo.id_c;

    this.CargoService.addCargo(this.cargo).subscribe();
    this.listarCargo();
  }

  eliminar(id: number) {
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
