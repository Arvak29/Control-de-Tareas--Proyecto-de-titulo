import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea_subordinada } from 'src/app/models/tarea_subordinada';
import {
  TareaSub,
  TareaSubordinadaService,
} from 'src/app/services/tarea-subordinada.service';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';
import { AsigTarea } from 'src/app/services/asig-tarea.service';

@Component({
  selector: 'app-tarea-subordinada',
  templateUrl: './tarea-subordinada.component.html',
  styleUrls: ['./tarea-subordinada.component.css'],
  providers: [UsuarioService, TareaSubordinadaService],
})
export class TareaSubordinadaComponent implements OnInit {
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';
  ListarTareaSub: TareaSub[] = [];
  ListarAsignTarea: AsigTarea[] = [];
  filtroSubordinada = '';
  id_entrada: string = "";
  mostrar_add_responsable: boolean = false;

  tareasub: Tarea_subordinada = {
    id_ts: '',
    nombre_ts: '',
    descripcion_ts: '',
    fecha_inicio_ts: '',
    fecha_entrega_ts: '',
    porcentaje_avance_ts: 1, //no se como cambiar un numero xD
    estado_ts: '',
    id_t: '',
    id_ft: '',
  };

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private TareaSubordinadaService: TareaSubordinadaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.listarUsuario();

    this.id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(this.id_entrada);


    if (this.id_entrada) {
      this.TareaSubordinadaService.getTareaSub(this.id_entrada).subscribe({
        next: (res: any) => {
          this.tareasub = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
  }

  irAtras() {
    this.location.back();
  }

  listarTareaSub() {
    this.TareaSubordinadaService.getTareaSub(this.id_entrada).subscribe(
      (res) => {
        console.log(res);
          this.ListarTareaSub = <any>res;
          console.log("asd: ")
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

  modificar() {
    this.TareaSubordinadaService.editTarea(
      <any>this.tareasub.id_ft,
      this.tareasub
    ).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}
