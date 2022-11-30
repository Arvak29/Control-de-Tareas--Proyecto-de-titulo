import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { AgregarTareaSub, TareaSub, TareaSubordinadaService} from 'src/app/services/tarea-subordinada.service';
import { AgregarTarea, Tarea, TareaService, Terminada} from '../../../services/tarea.service';
import { AsigTareaService, AsigTarea } from '../../../services/asig-tarea.service';
import { AgregarAsigTareaSub, AsigTareaSub, AsigTareaSubService } from 'src/app/services/asig-tarea-sub.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css'],
  providers: [TareaService, UsuarioService, TareaSubordinadaService, AsigTareaService, AsigTareaSubService],
})
export class TareaComponent implements OnInit {
  mostrar_add_responsable: boolean = false;
  TareaSub_formulario: FormGroup;
  id_entrada: string = "";
  id_usuario_crear_ts: number | undefined;
  nombre_usuario_crear_ts: string | undefined;
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
    fecha_entrega_t: ''.substring(0,10),
    fecha_entrega_efectiva_t: '',
    porcentaje_avance_t: '',
    estado_t: '',
  };

  constructor(
    private fb: FormBuilder,
    private TareaService: TareaService,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private AsigTareaService: AsigTareaService,
    private TareaSubordinadaService: TareaSubordinadaService,
  ) {
    this.TareaSub_formulario = this.fb.group({
      nombre_ts: ['', Validators.required],
      descripcion_ts: ['', Validators.required],
      fecha_entrega_ts: ['', Validators.required],
    });
  }

  ngOnInit(): void {   
    this.id_entrada = this.activeRouter.snapshot.params['id'];
    
    
    if (this.id_entrada) {
      this.TareaService.getTarea(this.id_entrada).subscribe({
        next: (res: any) => {
          this.tarea = <any>res[0];
        },
      });
    }
    this.btn_add_responsable();
    this.listarTareaSub();
    this.listarUsuario();
    this.listarAsigTarea();
  }

  crear_tarea_sub() {
    const TAREASUB: AgregarTareaSub = {
      nombre_ts: this.TareaSub_formulario.get('nombre_ts')?.value,
      descripcion_ts: this.TareaSub_formulario.get('descripcion_ts')?.value,
      fecha_entrega_ts: this.TareaSub_formulario.get('fecha_entrega_ts')?.value,
      porcentaje_avance_ts: 0,
      estado_ts: "En curso",
      id_t: this.id_entrada,
    };

    const año = TAREASUB.fecha_entrega_ts?.substring(0,4);
    const mes = TAREASUB.fecha_entrega_ts?.substring(5,7);
    const dia = TAREASUB.fecha_entrega_ts?.substring(8,10);
    TAREASUB.fecha_entrega_ts = (dia +"-"+mes+"-"+ año)

      this.TareaSubordinadaService.addTareaSub(TAREASUB).subscribe();
      window.location.reload();
  }
  
  limpiarFormularioTareaSub()
  {
    this.TareaSub_formulario.reset();
    this.id_usuario_crear_ts = undefined;
    this.nombre_usuario_crear_ts = undefined;
  }

  listarUsuario() {
    this.UsuarioService.getUsuarios().subscribe(
      (res) => {
          this.ListarUsuario = <any>res;
      },
    );
  }
  
  listarAsigTarea() {
    this.AsigTareaService.getVistaAsigTarea(this.id_entrada).subscribe(
      (res) => {
          this.ListarAsignTarea = <any>res;
          this.btn_add_responsable();
      },
    );
  }

  listarTareaSub() {
    this.TareaSubordinadaService.getTareaSub(this.id_entrada).subscribe(
      (res) => {
          this.ListarTareaSub = <any>res;
        },
      );
  }

  btn_add_responsable(){
    if(this.ListarAsignTarea.length == 0)
    {
      this.mostrar_add_responsable = true;
    }else{
      this.mostrar_add_responsable = false;
    }
  }

  eliminar() {
    if(this.ListarAsignTarea.length == 1)
    {
      this.eliminar_responsable();
    }
    
    this.TareaService.deleteTarea(<any>this.tarea.id_t).subscribe(
      (res) => {
        this.router.navigate(['/tareas']);
      },
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

  modificar() {
    const año = this.tarea.fecha_entrega_t?.substring(0,4)
    const mes = this.tarea.fecha_entrega_t?.substring(5,7)
    const dia = this.tarea.fecha_entrega_t?.substring(8,10)
    this.tarea.fecha_entrega_t = (dia +"-"+mes+"-"+ año)
    if(this.tarea.fecha_entrega_t = this.tarea.fecha_entrega_t){

    }
    this.TareaService.editTarea(<any>this.tarea.id_t, this.tarea).subscribe({
      next: (res: any) => {
        this.router.navigate(['/tareas']);
      },
    });
    
  }

  terminar() {
    const TERMINAR: Terminada = {
      nombre_t: this.tarea.nombre_t,
      descripcion_t: this.tarea.descripcion_t,
      fecha_entrega_t: this.tarea.fecha_entrega_t,
      estado_t: "Terminada",
    };
    this.TareaService.editTarea(<any>this.tarea.id_t, TERMINAR).subscribe({
      next: (res: any) => {
        this.router.navigate(['/historial']);
      },
    });
  }
}

