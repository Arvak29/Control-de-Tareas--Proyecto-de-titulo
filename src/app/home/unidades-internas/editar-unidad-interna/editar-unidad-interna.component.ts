import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  AgregarUnidad,
  Unidad,
  UnidadInternaService,
} from 'src/app/services/unidad-interna.service';

@Component({
  selector: 'app-editar-unidad-interna',
  templateUrl: './editar-unidad-interna.component.html',
  styleUrls: ['./editar-unidad-interna.component.css'],
  providers: [UnidadInternaService],
})
export class EditarUnidadInternaComponent implements OnInit {
  unidad: Unidad = {
    id_ui: '',
    nombre_ui: '',
  };

  constructor(
    private UnidadInternaService: UnidadInternaService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(id_entrada);

    if (id_entrada) {
      this.UnidadInternaService.getUnidad(id_entrada).subscribe({
        next: (res: any) => {
          this.unidad = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
  }

  eliminar() {
    this.UnidadInternaService.deleteUnidad(<any>this.unidad.id_ui).subscribe(
      (res) => {
        console.log('rol eliminado');
        this.router.navigate(['/unidades_internas']);
      },
      (err) => console.log(err)
    );
  }

  modificar() {
    this.UnidadInternaService.editUnidad(
      <any>this.unidad.id_ui,
      this.unidad
    ).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
    this.router.navigate(['/unidades_internas']);
  }
}
