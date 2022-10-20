import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tareas } from 'src/app/models/tarea';

@Component({
  selector: 'app-crear-tarea-subordinada',
  templateUrl: './crear-tarea-subordinada.component.html',
  styleUrls: ['./crear-tarea-subordinada.component.css'],
})
export class CrearTareaSubordinadaComponent implements OnInit {
  ngOnInit(): void {}
}
