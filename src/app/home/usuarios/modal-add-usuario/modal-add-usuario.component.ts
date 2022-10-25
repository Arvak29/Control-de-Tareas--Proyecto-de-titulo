import { Component, OnInit } from '@angular/core';
import { Usuario, UsuarioService } from 'src/app/services/usuario.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-modal-add-usuario',
  templateUrl: './modal-add-usuario.component.html',
  styleUrls: ['./modal-add-usuario.component.css'],
  providers: [UsuarioService],
})
export class ModalAddUsuarioComponent implements OnInit {
  ListarUsuario: Usuario[] = [];
  filtroUsuario = '';

  constructor(private UsuarioService: UsuarioService, private modal: NgModel) {}

  ngOnInit(): void {
    this.listarUsuario();
  }
  listarUsuario() {
    this.UsuarioService.getUsuarios().subscribe(
      (res) => {
        console.log(res);
        this.ListarUsuario = <any>res;
      },
      (err) => console.log(err)
    );
  }
}
