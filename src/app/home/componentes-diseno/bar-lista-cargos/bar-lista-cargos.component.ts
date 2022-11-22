import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CargoService } from 'src/app/services/cargo.service';

@Component({
  selector: 'app-bar-lista-Cargos',
  templateUrl: './bar-lista-Cargos.component.html',
  styleUrls: ['./bar-lista-Cargos.component.css'],
  providers: [CargoService],
})
export class BarListaCargosComponent implements OnInit {
  @Input() id: string | undefined;
  @Input() nombre: string | undefined;
  @Input() id_ui: string | undefined;
  @Input() id_r: string | undefined;

  constructor(private router: Router, private CargoService: CargoService) {}

  ngOnInit(): void {}

  modificar(id = this.id) {
    this.router.navigate(['/cargo/' + id]);
  }
}
