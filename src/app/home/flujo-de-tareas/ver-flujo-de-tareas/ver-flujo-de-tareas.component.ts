import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Flujo_tarea } from 'src/app/models/flujo_tareas';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import {
  AgregarFlujo,
  Flujo,
  FlujoService,
} from 'src/app/services/flujo.service';
import {
  TareaSub,
  TareaSubordinadaService,
} from 'src/app/services/tarea-subordinada.service';

@Component({
  selector: 'app-ver-flujo-de-tareas',
  templateUrl: './ver-flujo-de-tareas.component.html',
  styleUrls: ['./ver-flujo-de-tareas.component.css'],
  providers: [FlujoService, UsuarioService, TareaSubordinadaService],
})
export class VerFlujoDeTareasComponent implements OnInit {
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';
  ListarFlujo: Flujo_tarea[] = [];
  filtroFlujo = '';
  ListarTareaSub: TareaSub[] = [];
  filtroSubordinada = '';

  flujo: Flujo = {
    id_ft: '',
    nombre_ft: '',
    descripcion_ft: '',
    fecha_inicio_ft: '',
    fecha_entrega_ft: '',
    porcentaje_avance_ft: '',
    estado_ft: ''
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private FlujoService: FlujoService,
    private UsuarioService: UsuarioService,
    private activeRouter: ActivatedRoute,
    private TareaSubordinadaService: TareaSubordinadaService
  ) {}

  ngOnInit(): void {
    this.listarUsuario();
    this.listarTareaSub();

    const id_entrada = this.activeRouter.snapshot.params['id'];

    if (id_entrada) {
      this.FlujoService.getFlujo(id_entrada).subscribe({
        next: (res: any) => {
          this.flujo = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
  }

  listarTareaSub() {
    this.TareaSubordinadaService.getTareasSub().subscribe(
      (res) => {
        console.log(res);
        this.ListarTareaSub = <any>res;
      },
      (err) => console.log(err)
    );
  }

  listarUsuario() {
    this.UsuarioService.getUsuarios().subscribe(
      (res) => {
        console.log(res);
        this.ListarUsuario = <any>res;
      },
      (err) => console.log(err)
    );
  }
  eliminar() {
    this.FlujoService.deleteFlujo(<any>this.flujo.id_ft).subscribe(
      (res) => {
        console.log('flujo eliminado');
        this.router.navigate(['/flujo_de_tareas']);
      },
      (err) => console.log(err)
    );
  }

  modificar() {
    this.FlujoService.editFlujo(<any>this.flujo.id_ft, this.flujo).subscribe(
      {
        next: (res: any) => {
          console.log(res);
        },
        error: (err) => console.log(err),
      }
    );
    this.router.navigate(['/flujo_de_tareas']);
  }
}
