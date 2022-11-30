import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Flujo_tarea } from 'src/app/models/flujo_tareas';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { AgregarFlujo, Flujo, FlujoService } from 'src/app/services/flujo.service';
import { AgregarTareaSub, EjecutarTareaSub, TareaSub, TareaSubordinadaService } from 'src/app/services/tarea-subordinada.service';
import { EjecFlujoTarea, EjecFlujoTareaService } from 'src/app/services/ejec-flujo-tarea.service';
import { AsigTareaService } from 'src/app/services/asig-tarea.service';

@Component({
  selector: 'app-ver-flujo-de-tareas',
  templateUrl: './ver-flujo-de-tareas.component.html',
  styleUrls: ['./ver-flujo-de-tareas.component.css'],
  providers: [FlujoService, UsuarioService, TareaSubordinadaService,AsigTareaService, EjecFlujoTareaService],
})
export class VerFlujoDeTareasComponent implements OnInit {
  mostrar_add_responsable: boolean = false;
  id_entrada: string = "";
  ejecFlujoTarea: EjecFlujoTarea[] = [];
  TareaSub_formulario: FormGroup;
  id_usuario_crear_ts: number | undefined;
  nombre_usuario_crear_ts: string | undefined;
  warning: boolean = false;


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
    private EjecFlujoTareaService: EjecFlujoTareaService,
    private AsigTareaService: AsigTareaService,
    private TareaSubordinadaService: TareaSubordinadaService
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
      this.FlujoService.getFlujo(this.id_entrada).subscribe({
        next: (res: any) => {
          this.flujo = <any>res[0];
          console.log(res);
        },
        error: (err) => console.log(err),
      });
    }
    this.listarUsuario();
    this.listarTareaSub();
    this.listarAsigTarea();
  }

  listarAsigTarea() {
    this.EjecFlujoTareaService.getVistaEjecFlujoTarea(this.id_entrada).subscribe(
      (res) => {
          this.ejecFlujoTarea = <any>res;
          this.btn_add_responsable();
      },
    );
  }
  
  btn_add_responsable(){
    if(this.ejecFlujoTarea.length == 0)
    {
      this.mostrar_add_responsable = true;
    }
  }

  crear_tarea_sub() {
    const TAREASUB: EjecutarTareaSub = {
      nombre_ts: this.TareaSub_formulario.get('nombre_ts')?.value,
      descripcion_ts: this.TareaSub_formulario.get('descripcion_ts')?.value,
      fecha_entrega_ts: this.TareaSub_formulario.get('fecha_entrega_ts')?.value,
      porcentaje_avance_ts: 0,
      estado_ts: "En curso",
      id_ft: this.id_entrada,
    };

    const año = TAREASUB.fecha_entrega_ts?.substring(0,4);
    const mes = TAREASUB.fecha_entrega_ts?.substring(5,7);
    const dia = TAREASUB.fecha_entrega_ts?.substring(8,10);
    TAREASUB.fecha_entrega_ts = (dia +"-"+mes+"-"+ año)

      this.TareaSubordinadaService.addEjecucionTareaSub(TAREASUB).subscribe();
      window.location.reload();
  }

  limpiarFormularioTareaSub()
  {
    this.TareaSub_formulario.reset();
    this.id_usuario_crear_ts = undefined;
    this.nombre_usuario_crear_ts = undefined;
  }

  listarTareaSub() {
    this.TareaSubordinadaService.getTareaSubPorFT(this.id_entrada).subscribe(
      (res) => {
          this.ListarTareaSub = <any>res;
        },
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
    if(this.ListarTareaSub.length <1){
      this.FlujoService.deleteFlujo(<any>this.flujo.id_ft).subscribe(
        (res) => {
          this.router.navigate(['/flujo_de_tareas']);
        },
        );
      }else{
      console.log("Mensaje de error")
      this.warning = true;

    }
  }
  eliminar_responsable() {
    this.AsigTareaService.deleteAsigTarea(<any>this.ejecFlujoTarea[0].id_ft).subscribe(
      (res) => {
        console.log('Responsable eliminado');
      },
      (err) => console.log(err)
    );
  }

  eliminar_tarea_sub() {
    this.TareaSubordinadaService.deleteTareasub(<any>this.ListarTareaSub[0].id_ts).subscribe(
      (res) => {
        console.log('Tarea subordinada eliminado');
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
