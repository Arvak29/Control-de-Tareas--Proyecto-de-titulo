import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  permisosAdministrador(): boolean {
    const token = localStorage.getItem('token');
    let decodetoken: any = {};
    decodetoken = decode(token!);
    if (decodetoken[4] !== 'Administrador') {
      return false;
    }
    return true;
  }
}
