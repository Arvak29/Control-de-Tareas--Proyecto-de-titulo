import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FLUJO } from 'src/app/models/flujo_tareas';
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
  ListarFlujo: FLUJO[] = [];
  filtroFlujo = '';
  ListarTareaSub: TareaSub[] = [];
  filtroSubordinada = '';

  flujo: Flujo = {
    id_flujo: '',
    nombre_flujo: '',
    descripcion_flujo: '',
    fecha_comienzo: '',
    fecha_entrega: '',
    id_responsable_flujo: '',
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
    this.FlujoService.deleteFlujo(<any>this.flujo.id_flujo).subscribe(
      (res) => {
        console.log('flujo eliminado');
        this.router.navigate(['/flujo_de_tareas']);
      },
      (err) => console.log(err)
    );
  }

  modificar() {
    this.FlujoService.editFlujo(<any>this.flujo.id_flujo, this.flujo).subscribe(
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
