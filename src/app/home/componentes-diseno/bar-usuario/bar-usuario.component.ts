import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-bar-usuario',
  templateUrl: './bar-usuario.component.html',
  styleUrls: ['./bar-usuario.component.css'],
  providers: [UsuarioService],
})
export class BarUsuarioComponent implements OnInit {
  @Input() nombre: string | undefined;
  @Input() id: number | undefined;

  constructor(private router: Router, private UsuarioService: UsuarioService) {}

  ngOnInit(): void {}

  modificar(id = this.id) {
    this.router.navigate(['/usuario/' + id]);
  }
}
