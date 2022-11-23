import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from '../../../services/usuario.service';
import { Cargo, CargoService} from 'src/app/services/cargo.service';
import { Empresa, EmpresaService } from 'src/app/services/empresa.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers: [UsuarioService],
})
export class UsuarioComponent implements OnInit {
  ListarCargo: Cargo[] = [];
  ListarEmpresa: Empresa[] = [];
  usuario: Usuario = {
    id_u: '',
    nombre_u: '',
    email_u: '',
    password_u: '',
    id_c: '',
    id_e: '',
  };

  constructor(
    private UsuarioService: UsuarioService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private CargoService: CargoService,
    private EmpresaService: EmpresaService
  ) {}

  ngOnInit(): void {
    this.listarCargo();
    this.listarEmpresa();

    const id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(id_entrada);

    if (id_entrada) {
      this.UsuarioService.getUsuario(id_entrada).subscribe({
        next: (res: any) => {
          this.usuario = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
  }

  listarCargo() {
    this.CargoService.getCargo().subscribe({
      next: (res: any) => {
        this.ListarCargo = <any>res;
      },
      error: (err) => console.log(err),
    });
  }

  listarEmpresa() {
    this.EmpresaService.getEmpresa().subscribe({
      next: (res: any) => {
        this.ListarEmpresa = <any>res;
      },
      error: (err) => console.log(err),
    });
  }

  modificar() {
    this.UsuarioService.editUsuario(
      <any>this.usuario.id_u,
      this.usuario
    ).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
    this.router.navigate(['/usuarios']);
  }

  eliminar() {
    this.UsuarioService.deleteUsuario(<any>this.usuario.id_u).subscribe(
      (res) => {
        console.log('usuario eliminado');
        this.router.navigate(['/usuarios']);
      },
      (err) => console.log(err)
    );
  }
}
