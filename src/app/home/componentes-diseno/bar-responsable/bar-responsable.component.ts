import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-bar-responsable',
  templateUrl: './bar-responsable.component.html',
  styleUrls: ['./bar-responsable.component.css'],
  providers: [UsuarioService],
})
export class BarResponsableComponent implements OnInit {
  @Input() nombre: string | undefined;
  @Input() id: number | undefined;

  constructor(private router: Router, private UsuarioService: UsuarioService) {}

  ngOnInit(): void {}
}
