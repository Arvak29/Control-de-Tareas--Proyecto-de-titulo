import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  TareaSub,
  TareaSubordinadaService,
} from 'src/app/services/tarea-subordinada.service';

@Component({
  selector: 'app-bar-subtarea',
  templateUrl: './bar-subtarea.component.html',
  styleUrls: ['./bar-subtarea.component.css'],
  providers: [TareaSubordinadaService],
})
export class BarSubtareaComponent implements OnInit {
  @Input() titulo: string | undefined;
  @Input() id: string | undefined;

  constructor(
    private router: Router,
    private TareaSubordinadaService: TareaSubordinadaService
  ) {}

  ngOnInit(): void {}

  modificar(id = this.id) {
    this.router.navigate(['/tarea_subordinada/' + id]);
  }

  eliminar(id = this.id) {
    this.TareaSubordinadaService.deleteTareasub(<any>this.id).subscribe(
      (res) => {
        console.log('tarea subordinada eliminado');
        window.location.reload();
      },
      (err) => console.log(err)
    );
  }
}
