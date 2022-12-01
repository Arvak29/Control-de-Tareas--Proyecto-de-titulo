import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-rol',
  templateUrl: './bar-rol.component.html',
  styleUrls: ['./bar-rol.component.css']
})
export class BarRolComponent implements OnInit {
  @Input() id: string | undefined;
  @Input() nombre: string | undefined;

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  modificar(id = this.id) {
    this.router.navigate(['/rol/' + id]);
  }

}
