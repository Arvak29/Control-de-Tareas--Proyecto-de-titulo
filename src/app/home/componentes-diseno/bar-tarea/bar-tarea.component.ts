import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PorcGlobal, PorcGlobalService } from 'src/app/services/porc-global.service';
import { TareaService } from 'src/app/services/tarea.service';

@Component({
  selector: 'app-bar-tarea',
  templateUrl: './bar-tarea.component.html',
  styleUrls: ['./bar-tarea.component.css'],
  providers: [TareaService, PorcGlobalService],
})
export class BarTareaComponent implements OnInit {
  @Input() funciones: number | undefined;
  @Input() titulo: string | undefined;
  @Input() cantidadResponsables: string | undefined;
  @Input() cantidadSubordinada: string | undefined;
  @Input() porcentaje: string | undefined;
  @Input() id: string | undefined;
  
  ListarPG: PorcGlobal[] = [];
  percent = 71; 
  outerStrokeColor ="#ffffff"

  constructor(private router: Router, private TareaService: TareaService, private PorcGlobalService : PorcGlobalService) {}

  ngOnInit(): void {
    this.listarPG()
  }

  modificar(id = this.id) {
    this.router.navigate(['/tarea/' + id]);
  }
  MostrarTareas(id = this.id) {
    this.router.navigate(['/historialtarea/' + id]);
  }

  listarPG() {
    if(this.percent >= 100){
      this.outerStrokeColor ="#e44d26"
    }else if(this.percent >= 72){
      this.outerStrokeColor ="#ffca28"
    }else{
      this.outerStrokeColor ="#1dd300"
    }
    this.PorcGlobalService.getPorcGlobales("1").subscribe({
      next: (res: any) => {
        this.ListarPG = <any>res;
        this.percent = <any>this.ListarPG[0].avance_pg;

      },
      error: (err) => console.log(err),
    });
  }


}
