import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Unidad_Interna } from 'src/app/models/unidad_interna';
import {
  AgregarUnidad,
  UnidadInternaService,
} from 'src/app/services/unidad-interna.service';

@Component({
  selector: 'app-crear-unidad-interna',
  templateUrl: './crear-unidad-interna.component.html',
  styleUrls: ['./crear-unidad-interna.component.css'],
  providers: [UnidadInternaService],
})
export class CrearUnidadInternaComponent implements OnInit {
  unidad_interna_formulario_Grupo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private UnidadInternaService: UnidadInternaService
  ) {
    this.unidad_interna_formulario_Grupo = this.fb.group({
      nombre_unidad_i: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  unidad_interna() {
    const UNIDAD_INTERNA: AgregarUnidad = {
      nombre_unidad_i:
        this.unidad_interna_formulario_Grupo.get('nombre_unidad_i')?.value,
    };

    console.log(UNIDAD_INTERNA);

    this.router.navigate(['/unidades_internas']);
  }
}
