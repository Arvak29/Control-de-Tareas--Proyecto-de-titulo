import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea_sub } from 'src/app/models/tarea_subordinada';
import {
  TareaSub,
  TareaSubordinadaService,
} from 'src/app/services/tarea-subordinada.service';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';

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
  filtroSubordinada = '';

  tareasub: Tarea_sub = {
    id_tarea_sub: '',
    nombre_tarea_sub: '',
    descripcion_sub: '',
    fecha_comienzo: '',
    fecha_entrega: '',
    id_responsable_sub: '',
    id_tarea: '',
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

    const id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(id_entrada);

    if (id_entrada) {
      this.TareaSubordinadaService.getTareaSub(id_entrada).subscribe({
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
      <any>this.tareasub.id_tarea_sub,
      this.tareasub
    ).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  }
}
