import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-bar-lista-roles',
  templateUrl: './bar-lista-roles.component.html',
  styleUrls: ['./bar-lista-roles.component.css'],
  providers: [RolService],
})
export class BarListaRolesComponent implements OnInit {
  @Input() nombre: string | undefined;
  @Input() id: number | undefined;

  constructor(private router: Router, private RolService: RolService) {}

  ngOnInit(): void {}

  modificar(id = this.id) {
    this.router.navigate(['/rol/' + id]);
  }
}
