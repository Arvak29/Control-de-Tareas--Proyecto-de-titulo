import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea_subordinada } from 'src/app/models/tarea_subordinada';
import {TareaSub, TareaSubordinadaService} from 'src/app/services/tarea-subordinada.service';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { Location } from '@angular/common';
import { AsigTareaService, AsigTarea } from '../../../services/asig-tarea.service';
import { AsigTareaSub, AsigTareaSubService } from 'src/app/services/asig-tarea-sub.service';


@Component({
  selector: 'app-tarea-subordinada',
  templateUrl: './tarea-subordinada.component.html',
  styleUrls: ['./tarea-subordinada.component.css'],
  providers: [UsuarioService, TareaSubordinadaService, AsigTareaService, AsigTareaSubService],
})
export class TareaSubordinadaComponent implements OnInit {
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';
  ListarTareaSub: TareaSub[] = [];
  ListarAsigTareaSub: AsigTareaSub[] = [];
  filtroSubordinada = '';
  id_entrada: string = "";
  mostrar_add_responsable: boolean = false;

  tareasub: TareaSub = {
    id_ts: '',
    nombre_ts: '',
    descripcion_ts: '',
    fecha_inicio_ts: '',
    fecha_entrega_ts: '',
    fecha_entrega_efectiva_ts: '',
    porcentaje_avance_ts: '',
    estado_ts: '',
    indicador_ts: '',
    id_t: '',
    id_ft: '',
  };

  constructor(
    private router: Router,
    private activeRouter: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private TareaSubordinadaService: TareaSubordinadaService,
    private AsigTareaService: AsigTareaService,
    private AsigTareaSubService: AsigTareaSubService,
    private location: Location
  ) {}

  ngOnInit(): void {
    
    this.id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(this.id_entrada)
    
    if (this.id_entrada) {
      this.TareaSubordinadaService.getTareaSubordinada(this.id_entrada).subscribe({
        next: (res: any) => {
          this.tareasub = <any>res[0];
          console.log("aqui estoy: " + this.tareasub);
        },
        error: (err) => console.log(err),
      });
    }

    this.listarUsuario();
    this.listarAsigTarea();
  }

  irAtras() {
    this.location.back();
  }

  listarAsigTarea() {
    this.AsigTareaSubService.getVistaAsigTareaSub(this.id_entrada).subscribe(
      (res) => {
        console.log(res);
          this.ListarAsigTareaSub = <any>res;
          this.btn_add_responsable();
      },
      (err) => console.log(err)
    );
  }

  btn_add_responsable(){
    if(this.ListarAsigTareaSub.length == 0)
    {
      this.mostrar_add_responsable = true;
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
    if(this.ListarAsigTareaSub.length == 1)
    {
      this.eliminar_responsable();
    }
    
    this.TareaSubordinadaService.deleteTareasub(<any>this.tareasub.id_ts).subscribe(
      (res) => {
        console.log('tarea eliminado');
        this.router.navigate(['/tareas']);
      },
      (err) => console.log(err)
    );
  }

  eliminar_responsable() {
    this.AsigTareaSubService.deleteTareaSub(<any>this.ListarAsigTareaSub[0].id_ts).subscribe(
      (res) => {
        console.log('Responsable eliminado');
      },
      (err) => console.log(err)
    );
    this.irAtras();
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

  listar(){
    console.log("Lista tarea: " + this.tareasub.id_ts)
    console.log("Lista lista: " + this.ListarTareaSub[0].id_ts)
  }
}
