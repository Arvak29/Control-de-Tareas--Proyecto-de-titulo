import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { TareaSub, TareaSubordinadaService} from 'src/app/services/tarea-subordinada.service';
import { AgregarTarea, Tarea, TareaService} from '../../../services/tarea.service';
import { AsigTareaService, AsigTarea } from '../../../services/asig-tarea.service';
import { AsigTareaSub, AsigTareaSubService } from 'src/app/services/asig-tarea-sub.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
  providers: [TareaService, UsuarioService, TareaSubordinadaService, AsigTareaService, AsigTareaSubService],
})
export class TareaComponent implements OnInit {
  mostrar_add_responsable: boolean = false;
  id_entrada: string = "";
  ListarAsignTarea: AsigTarea[] = [];
  ListarAsigTareaSub: AsigTareaSub[] = [];
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';
  ListarTareaSub: TareaSub[] = [];
  filtroSubordinada = '';

  tarea: Tarea = {
    id_t: '',
    nombre_t: '',
    descripcion_t: '',
    fecha_inicio_t: '',
    fecha_entrega_t: '',
    porcentaje_avance_t: '',
    estado_t: '',
  };

  constructor(
    private TareaService: TareaService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private TareaSubordinadaService: TareaSubordinadaService,
    private AsigTareaService: AsigTareaService,
    private AsigTareaSubService: AsigTareaSubService
  ) {}

  ngOnInit(): void {    
    this.id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(this.id_entrada);

    this.listarTareaSub();
    this.listarUsuario();

    if (this.id_entrada) {
      this.TareaService.getTarea(this.id_entrada).subscribe({
        next: (res: any) => {
          this.tarea = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
    this.listarAsigTarea();
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
  
  listarAsigTarea() {
    this.AsigTareaService.getVistaAsigTarea(this.id_entrada).subscribe(
      (res) => {
        console.log(res);
          this.ListarAsignTarea = <any>res;
          this.btn_add_responsable();
      },
      (err) => console.log(err)
    );
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

  btn_add_responsable(){
    if(this.ListarAsignTarea.length == 0)
    {
      this.mostrar_add_responsable = true;
    }
  }

  eliminar() {
    if(this.ListarAsignTarea.length == 1)
    {
      this.eliminar_responsable();
    }
    
    this.TareaService.deleteTarea(<any>this.tarea.id_t).subscribe(
      (res) => {
        console.log('tarea eliminado');
        this.router.navigate(['/tareas']);
      },
      (err) => console.log(err)
    );
  }

  eliminar_responsable() {
    this.AsigTareaService.deleteAsigTarea(<any>this.ListarAsignTarea[0].id_t).subscribe(
      (res) => {
        console.log('Responsable eliminado');
      },
      (err) => console.log(err)
    );
  }

  // Elimina todas las tareas ( por hacer )
  eliminar_tarea_sub() {
    this.TareaSubordinadaService.deleteTareasub(<any>this.ListarTareaSub[8].id_ts).subscribe(
      (res) => {
        console.log('Tarea subordinada eliminado');
      },
      (err) => console.log(err)
    );
  }

  modificar() {
    this.TareaService.editTarea(<any>this.tarea.id_t, this.tarea).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
    this.router.navigate(['/tareas']);
  }
  

}

