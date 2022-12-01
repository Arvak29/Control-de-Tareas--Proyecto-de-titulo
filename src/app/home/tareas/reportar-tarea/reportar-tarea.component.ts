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
    asunto_rp: '',
    descripcion_rp: '',
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private FlujoService: FlujoService,
    private TareaService: TareaService,
    private ReporteService: ReporteService,
    private TareaSubordinadaService: TareaSubordinadaService
  ) {
    this.Reporte_Grupo = this.fb.group({
      asunto_rp: ['', Validators.required],
      descripcion_rp: ['', Validators.required],

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
        this.ReporteService.getReportes().subscribe({
          next: (res: any) => {
            this.ListarReporte = <any>res;
          },
          error: (err: any) => console.log(err),
        });
        }  

      crear_reporte(){
        const REPORTE: AgregarReporte = {
          asunto_rp: this.Reporte_Grupo.get('asunto_rp')?.value,
          descripcion_rp: this.Reporte_Grupo.get('descripcion_rp')?.value,
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
