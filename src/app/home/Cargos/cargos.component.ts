import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgregarCargo, Cargo, CargoService} from '../../services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css'],
  providers: [CargoService],
})
export class CargosComponent implements OnInit {
  Cargo_Grupo: FormGroup;
  ListarCargo: Cargo[] = [];
  filtroCargo = '';

  cargo: Cargo = {
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
    this.CargoService.getCargo().subscribe({
    next: (res: any) => {
      this.ListarCargo = <any>res;
    },
    error: (err) => console.log(err),
  });
  }

  crear_cargo() {
    const CARGO: AgregarCargo = {
      nombre_c: this.Cargo_Grupo.get('nombre_c')?.value,
    };
    this.CargoService.addCargo(CARGO).subscribe();
    this.listarCargo();
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
