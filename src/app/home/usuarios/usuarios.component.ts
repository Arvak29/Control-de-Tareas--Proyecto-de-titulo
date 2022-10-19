import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  /*
  eliminar(id: number) {
    this.RolService.deleteRol(id).subscribe(
      (res) => {
        console.log('rol eliminado');
        this.listarRol();
      },
      (err) => console.log(err)
    );
  }

  modificar(id: number) {
    this.router.navigate(['/edit/' + id]);
  }
  */
}
