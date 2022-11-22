import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgregarUsuario, UsuarioService} from 'src/app/services/usuario.service';
import { Cargo, CargoService} from 'src/app/services/cargo.service';
import { Empresa, EmpresaService } from 'src/app/services/empresa.service';


@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css'],
  providers: [UsuarioService],
})
export class CrearUsuariosComponent implements OnInit {
  Crear_Usuario_Grupo: FormGroup;
  ListarCargo: Cargo[] = [];
  ListarEmpresa: Empresa[] = [];
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private UsuarioService: UsuarioService,
    private CargoService: CargoService,
    private EmpresaService: EmpresaService
  ) {
    this.Crear_Usuario_Grupo = this.fb.group({
      nombre_usuario: ['', Validators.required],
      email_usuario: ['', Validators.required],
      password_usuario: ['', Validators.required],
      cargo_usuario: ['', Validators.required],
      empresa_usuario: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarCargo();
    this.listarEmpresa();
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

  crear_usuario() {
    const USUARIO: AgregarUsuario = {
      nombre_u: this.Crear_Usuario_Grupo.get('nombre_usuario')?.value,
      email_u: this.Crear_Usuario_Grupo.get('email_usuario')?.value,
      password_u: this.Crear_Usuario_Grupo.get('password_usuario')?.value,
      id_c: this.Crear_Usuario_Grupo.get('cargo')?.value,
      id_e: this.Crear_Usuario_Grupo.get('empresa')?.value,
    };
    this.UsuarioService.addUsuario(USUARIO).subscribe();
    this.router.navigate(['/usuarios']);
  }
}
