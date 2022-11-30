import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tareas } from '../models/tarea';
import { TareaService } from '../services/tarea.service';
import { VUI, CargaTrabajo, PorcGlobal, PorcGlobalService } from '../services/porc-global.service';
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
  ListarVUI: VUI[] = [];
  ListarCargaTrabajo: CargaTrabajo[] = [];
  @Input() avance: string | undefined;
  @Input() id: string | undefined;
  percent = 0;  

  constructor(private router: Router, private TareaService: TareaService, private PorcGlobalService : PorcGlobalService) {}
  
  
  ngOnInit(): void {
    this.listarPG();
    this.listarTarea();
    this.listarVUI();
    this.listarCargaTrabajo();
  }
  
  listarVUI() {
    this.PorcGlobalService.getVUI().subscribe(
      (res) => {
        this.ListarVUI = <any>res;
      },
      (err) => console.log(err)
    );
  }

  listarCargaTrabajo() {
    this.PorcGlobalService.getCargaTrabajo().subscribe(
      (res) => {
        this.ListarCargaTrabajo = <any>res;
      },
      (err) => console.log(err)
    );
  }

  listarPG() {
    this.PorcGlobalService.getPorcGlobales("1").subscribe({
      next: (res: any) => {
        this.ListarPG = <any>res;
        this.percent = <any>this.ListarPG[0].avance_pg;
      },
      error: (err) => console.log(err),
    });
  }

  listarTarea() {
    this.TareaService.getTareas().subscribe(
      (res) => {
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
