import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cargo, CargoService } from 'src/app/services/cargo.service';
import { rol, RolService } from '../../../services/rol.service';
import { Unidad, UnidadInternaService } from '../../../services/unidad-interna.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],
  providers: [CargoService],
})
export class CargoComponent implements OnInit {
  ListarRol: rol[] = [];
  ListarUnidad: Unidad[] = [];
  cargo: Cargo = {
    id_c: '',
    nombre_c: '',
  };

  constructor(
    private CargoService: CargoService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private RolService: RolService,
    private UnidadInternaService: UnidadInternaService
  ) {}

  ngOnInit(): void {
    this.listarRol();
    this.listarUniadad();

    const id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(id_entrada);

    if (id_entrada) {
      this.CargoService.getUnCargo(id_entrada).subscribe({
        next: (res: any) => {
          this.cargo = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
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

  modificar() {
    this.CargoService.editCargo(<any>this.cargo.id_c, this.cargo).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
    this.router.navigate(['/cargos']);
  }

  eliminar() {
    this.CargoService.deleteCargo(<any>this.cargo.id_c).subscribe(
      (res) => {
        console.log('cargo eliminado');
        this.router.navigate(['/cargos']);
      },
      (err) => console.log(err)
    );
  }
}
