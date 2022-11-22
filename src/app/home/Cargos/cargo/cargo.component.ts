import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { cargo, CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.css'],
  providers: [CargoService],
})
export class CargoComponent implements OnInit {
  cargo: cargo = {
    id_c: '',
    nombre_c: '',
  };

  constructor(
    private CargoService: CargoService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
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

  eliminar() {
    this.CargoService.deleteCargo(<any>this.cargo.id_c).subscribe(
      (res) => {
        console.log('cargo eliminado');
        this.router.navigate(['/cargos']);
      },
      (err) => console.log(err)
    );
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
}
