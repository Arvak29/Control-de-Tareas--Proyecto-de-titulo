import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import {
  AgregarTarea,
  Tarea,
  TareaService,
} from '../../../services/tarea.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
  providers: [TareaService, UsuarioService],
})
export class TareaComponent implements OnInit {
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';

  tarea: Tarea = {
    id_tarea: '',
    nombre_tarea: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_termino: '',
    id_responsable: '',
  };

  constructor(
    private TareaService: TareaService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private UsuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.listarUsuario();

    const id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(id_entrada);

    if (id_entrada) {
      this.TareaService.getTarea(id_entrada).subscribe({
        next: (res: any) => {
          this.tarea = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
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
    this.TareaService.deleteTarea(<any>this.tarea.id_tarea).subscribe(
      (res) => {
        console.log('tarea eliminado');
        this.router.navigate(['/tareas']);
      },
      (err) => console.log(err)
    );
  }

  modificar() {
    this.TareaService.editTarea(<any>this.tarea.id_tarea, this.tarea).subscribe(
      {
        next: (res: any) => {
          console.log(res);
        },
        error: (err) => console.log(err),
      }
    );
    this.router.navigate(['/tareas']);
  }
}
