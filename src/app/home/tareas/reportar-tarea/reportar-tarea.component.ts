import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TareaSub, TareaSubordinadaService } from 'src/app/services/tarea-subordinada.service';
import { Tarea, TareaService } from 'src/app/services/tarea.service';
import { Flujo, FlujoService} from 'src/app/services/flujo.service';
import { AgregarReporte, Reporte, ReporteService } from 'src/app/services/reportar-problema.service';


@Component({
  selector: 'app-reportar-tarea',
  templateUrl: './reportar-tarea.component.html',
  styleUrls: ['./reportar-tarea.component.css'],
  providers: [ReporteService, TareaService, TareaSubordinadaService, FlujoService],
})
export class ReportarTareaComponent implements OnInit {
  Reporte_Grupo: FormGroup;
  ListarTarea: Tarea[] = [];
  ListarTareaSub: TareaSub[] = [];
  ListarFlujo: Flujo[] = [];
  ListarReporte: Reporte[] = [];

  reporte: Reporte = {
    id_rp: '',
    descripcion_rp: '',
    id_t: '',
    id_ts: '',
    id_ft: ''
  };
  ReporteService: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private FlujoService: FlujoService,
    private TareaService: TareaService,
    private TareaSubordinadaService: TareaSubordinadaService
  ) {
    this.Reporte_Grupo = this.fb.group({
      descripcion_rp: ['', Validators.required],
      id_t: ['', Validators.required],
      id_ts: ['', Validators.required],
      id_ft: ['', Validators.required],
   });
  }
  ngOnInit(): void {
    this.listarTarea();
    this.listarTareaSub();
    this.listarFlujo();
  }

  listarTarea() {
    this.TareaService.getTareas().subscribe({
      next: (res: any) => {
        this.ListarTarea = <any>res;
      },
      error: (err) => console.log(err),
    });
    }

    listarTareaSub() {
      this.TareaSubordinadaService.getTareasSub().subscribe({
        next: (res: any) => {
          this.ListarTareaSub = <any>res;
        },
        error: (err) => console.log(err),
      });
      }

      listarFlujo() {
        this.FlujoService.getFlujos().subscribe({
          next: (res: any) => {
            this.ListarFlujo = <any>res;
          },
          error: (err) => console.log(err),
        });
        }

      listarReporte() {
        this.ReporteService.getReporte().subscribe({
          next: (res: any) => {
            this.ListarReporte = <any>res;
          },
          error: (err: any) => console.log(err),
        });
        }  

      crear_reporte(){
        const REPORTE: AgregarReporte = {
          descripcion_rp: this.Reporte_Grupo.get('descripcion_rp')?.value,
          id_t: this.Reporte_Grupo.get('id_t')?.value,
          id_ts: this.Reporte_Grupo.get('id_ts')?.value,
          id_ft: this.Reporte_Grupo.get('id_ft')?.value,
        };
        this.ReporteService.addReporte(REPORTE).subscribe();
        this.router.navigate(['/reportes'])
      }

      agregar() {
        delete this.reporte.id_rp;
    
        this.ReporteService.addReporte(this.reporte).subscribe();
        this.listarReporte();
      }
  }
