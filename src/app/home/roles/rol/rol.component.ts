import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rol, RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService],
})
export class RolComponent implements OnInit {
  rol: Rol = {
    id_rol: '',
    nombre: '',
  };

  constructor(
    private RolService: RolService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(id_entrada);

    if (id_entrada) {
      this.RolService.getUnRol(id_entrada).subscribe({
        next: (res: any) => {
          this.rol = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
  }

  eliminar() {
    this.RolService.deleteRol(<any>this.rol.id_rol).subscribe(
      (res) => {
        console.log('rol eliminado');
        this.router.navigate(['/roles']);
      },
      (err) => console.log(err)
    );
  }

  modificar() {
    this.RolService.editRol(<any>this.rol.id_rol, this.rol).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
    this.router.navigate(['/roles']);
  }
}
