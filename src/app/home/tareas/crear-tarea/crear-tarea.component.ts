import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';
import {
  AgregarTarea,
  Tarea,
  TareaService,
} from 'src/app/services/tarea.service';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
  providers: [TareaService, UsuarioService],
})
export class CrearTareaComponent implements OnInit {
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';
  Tarea_formulario: FormGroup;
  ListarTarea: Tareas[] = [];

  tarea: Tarea = {
    id_tarea: '',
    nombre_tarea: '',
    descripcion: '',
    fecha_inicio: '',
    fecha_termino: '',
    id_responsable: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private TareaService: TareaService,
    private UsuarioService: UsuarioService
  ) {
    this.Tarea_formulario = this.fb.group({
      nombre_tarea: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_termino: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listarUsuario();
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

  crear_tarea() {
    const TAREA: AgregarTarea = {
      nombre_tarea: this.Tarea_formulario.get('nombre_tarea')?.value,
      descripcion: this.Tarea_formulario.get('descripcion')?.value,
      fecha_inicio: this.Tarea_formulario.get('fecha_inicio')?.value,
      fecha_termino: this.Tarea_formulario.get('fecha_termino')?.value,
    };
    this.TareaService.addTarea(TAREA).subscribe();
    this.router.navigate(['/tareas']);
  }

  agregar() {
    delete this.tarea.id_tarea;

    this.TareaService.addTarea(this.tarea).subscribe();
  }
}
