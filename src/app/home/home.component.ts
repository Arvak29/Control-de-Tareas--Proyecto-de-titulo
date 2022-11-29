import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tareas } from '../models/tarea';
import { TareaService } from '../services/tarea.service';
import { PorcGlobal, PorcGlobalService } from '../services/porc-global.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [TareaService, PorcGlobalService],
})
export class HomeComponent implements OnInit {
  ListarTarea: Tareas[] = [];
  ListarPG: PorcGlobal[] = [];
  @Input() avance_pg: string | undefined;
  constructor(private router: Router, private TareaService: TareaService, private PorcGlobalService : PorcGlobalService) {}

  ngOnInit(): void {
    this.listarPG();
    this.listarTarea();
  }

  listarPG() {
    this.PorcGlobalService.getPorcGlobal().subscribe(
      (res) => {
        console.log(res);
        this.ListarPG = <any>res;
      },
      (err) => console.log(err)
    );
  }


  listarTarea() {
    this.TareaService.getTareas().subscribe(
      (res) => {
        console.log(res);
        this.ListarTarea = <any>res;
      },
      (err) => console.log(err)
    );
  }

  permisosAdministrador(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken.rol !== 'Administrador') {
      return false;
    }
    return true;
  }
}
