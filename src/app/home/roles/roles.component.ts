import { Component, OnInit } from '@angular/core';
import { rol, RolService } from 'src/app/services/rol.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers:[RolService]
})
export class RolesComponent implements OnInit {
  ListarRol: rol[] = [];
  filtroRol = '';
  constructor(
    private RolService: RolService,
  ) { }

  ngOnInit(): void {
    this.listarCargo();
  }

  listarCargo() {
    this.RolService.getRol().subscribe({
    next: (res: any) => {
      this.ListarRol = <any>res;
    },
    error: (err) => console.log(err),
  });
  }

}
