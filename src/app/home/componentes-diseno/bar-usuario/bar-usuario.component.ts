import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AsigTareaService, AgregarAsigTarea } from '../../../services/asig-tarea.service';


@Component({
  selector: 'app-bar-usuario',
  templateUrl: './bar-usuario.component.html',
  styleUrls: ['./bar-usuario.component.css'],
  providers: [UsuarioService, AsigTareaService],
})
export class BarUsuarioComponent implements OnInit {
  @Input() funciones: number | undefined;
  @Input() nombre: string | undefined;
  @Input() id: number | undefined;

  constructor(private router: Router, 
    private activeRouter: ActivatedRoute,
    private UsuarioService: UsuarioService,
    private AsigTareaService: AsigTareaService
    ) {}

  id_entrada: string = "";

  ngOnInit(): void {
    this.id_entrada = this.activeRouter.snapshot.params['id'];
    console.log(this.id_entrada);
  }

  //llamar con el numero 1 en el ngSwitch
  modificar(id = this.id) {
    this.router.navigate(['/usuario/' + id]);
  }

  crear_asig_tarea() {
    const ASIGTAREA: AgregarAsigTarea = {
      id_u_at: this.id?.toString(),
      id_t_at: this.id_entrada,
      respuesta_at: "Pendiente",
      justificacion_at: "",
    };
    this.AsigTareaService.addAsigTarea(ASIGTAREA).subscribe();

    window.location.reload();
  }
}
