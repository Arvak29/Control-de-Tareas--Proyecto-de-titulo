import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlujoService } from 'src/app/services/flujo.service';

@Component({
  selector: 'app-bar-flujo',
  templateUrl: './bar-flujo.component.html',
  styleUrls: ['./bar-flujo.component.css'],
  providers: [FlujoService],
})
export class BarFlujoComponent implements OnInit {
  @Input() titulo: string | undefined;
  @Input() cantidadResponsables: string | undefined;
  @Input() cantidadSubordinada: string | undefined;
  @Input() porcentaje: string | undefined;
  @Input() id: number | undefined;

  constructor(private router: Router, private FlujoService: FlujoService) {}

  ngOnInit(): void {}

  modificar(id = this.id) {
    this.router.navigate(['/flujo_de_tarea/' + id]);
  }
}
