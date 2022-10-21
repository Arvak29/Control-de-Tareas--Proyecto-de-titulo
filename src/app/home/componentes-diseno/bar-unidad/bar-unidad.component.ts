import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnidadInternaService } from 'src/app/services/unidad-interna.service';

@Component({
  selector: 'app-bar-unidad',
  templateUrl: './bar-unidad.component.html',
  styleUrls: ['./bar-unidad.component.css'],
  providers: [UnidadInternaService],
})
export class BarUnidadComponent implements OnInit {
  @Input() nombre: string | undefined;
  @Input() id: number | undefined;

  constructor(
    private router: Router,
    private UnidadInternaService: UnidadInternaService
  ) {}

  ngOnInit(): void {}

  modificar(id = this.id) {
    this.router.navigate(['/unidad_interna/' + id]);
  }
}
