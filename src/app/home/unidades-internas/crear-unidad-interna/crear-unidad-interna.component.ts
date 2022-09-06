import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Unidad_Interna } from 'src/app/models/unidad_interna';

@Component({
  selector: 'app-crear-unidad-interna',
  templateUrl: './crear-unidad-interna.component.html',
  styleUrls: ['./crear-unidad-interna.component.css']
})
export class CrearUnidadInternaComponent implements OnInit {

  unidad_interna_formulario_Grupo: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.unidad_interna_formulario_Grupo = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  unidad_interna(){

    const UNIDAD_INTERNA: Unidad_Interna = {
      nombre: this.unidad_interna_formulario_Grupo.get('nombre')?.value,
      descripcion: this.unidad_interna_formulario_Grupo.get('descripcion')?.value,
    }

    console.log(UNIDAD_INTERNA);

    this.router.navigate(['/unidades_internas'])
  }

}
