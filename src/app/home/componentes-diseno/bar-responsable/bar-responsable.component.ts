import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsigTareaSubService } from 'src/app/services/asig-tarea-sub.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AsigTareaService, AsigTarea } from '../../../services/asig-tarea.service';
import { TareaComponent } from '../../tareas/tarea/tarea.component';

@Component({
  selector: 'app-bar-responsable',
  templateUrl: './bar-responsable.component.html',
  styleUrls: ['./bar-responsable.component.css'],
  providers: [UsuarioService, AsigTareaService, AsigTareaSubService, TareaComponent],
})
export class BarResponsableComponent implements OnInit {
  @Input() funciones: number | undefined;
  @Input() nombre: string | undefined;
  @Input() id: number | undefined;

  constructor(private router: Router,
     private UsuarioService: UsuarioService,
     private AsigTareaService: AsigTareaService,
     private AsigTareaSubService: AsigTareaSubService,
     private TareaComponent: TareaComponent
     ) {}

  ngOnInit(): void {
  }

  eliminar() {
    this.AsigTareaService.deleteAsigTarea(<any>this.id).subscribe(
      (res) => {
        console.log('tarea eliminado');
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }
  eliminarTareaSub() {
    this.AsigTareaSubService.deleteTareaSub(<any>this.id).subscribe(
      (res) => {
        console.log('tarea eliminado');
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }
}
