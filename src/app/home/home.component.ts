import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tareas } from '../models/tarea';
import { TareaService } from '../services/tarea.service';
import { VUI, CargaTrabajo, PorcGlobal, PorcGlobalService } from '../services/porc-global.service';
import decode from 'jwt-decode';
import { Cargo, CargoService } from '../services/cargo.service';


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
  ListarCargo: Cargo[] = [];
  @Input() avance: string | undefined;
  @Input() id: string | undefined;
  percent = 71; 
  outerStrokeColor ="#ffffff"
  id_cargo = '';

  constructor(private router: Router, 
              private TareaService: TareaService, 
              private PorcGlobalService : PorcGlobalService,
              private CargoService : CargoService
              ) {}
  
  
  ngOnInit(): void {
    this.listarPG();
    this.listarTarea();
    this.listarVUI();
    this.listarCargaTrabajo();
  }

  listarCargaTrabajo() {
    this.PorcGlobalService.getCargaTrabajo().subscribe(
      (res) => {
        this.ListarCargaTrabajo = <any>res;
        console.log(this.ListarCargaTrabajo[0].nombre_r)
        console.log(this.ListarCargaTrabajo)
      },
      (err) => console.log(err)
    );
    
  }

  listarVUI() {
    this.PorcGlobalService.getVUI().subscribe(
      (res) => {
        this.ListarVUI = <any>res;
      },
      (err) => console.log(err)
    );
  }


  listarPG() {
    if(this.percent >= 100){
      this.outerStrokeColor ="#e44d26"
    }else if(this.percent >= 72){
      this.outerStrokeColor ="#ffca28"
    }else{
      this.outerStrokeColor ="#40ed9a"
    }
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
        console.log(this.ListarTarea);
      },
      (err) => console.log(err)
    );
  }

  listarCargo() {
    this.CargoService.getUnCargo(this.id_cargo).subscribe({
    next: (res: any) => {
      this.ListarCargo = <any>res;
    },
    error: (err) => console.log(err),
  });
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
