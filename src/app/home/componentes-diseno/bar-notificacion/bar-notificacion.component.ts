import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bar-notificacion',
  templateUrl: './bar-notificacion.component.html',
  styleUrls: ['./bar-notificacion.component.css'],
})
export class BarNotificacionComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
}
