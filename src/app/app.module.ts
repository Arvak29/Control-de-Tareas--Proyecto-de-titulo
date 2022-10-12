import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Barra de progreso circular
import { NgCircleProgressModule } from 'ng-circle-progress';

//componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { CrearUsuariosComponent } from './home/usuarios/crear-usuarios/crear-usuarios.component';
import { NavComponent } from './home/usuarios/nav/nav.component';
import { UnidadesInternasComponent } from './home/unidades-internas/unidades-internas.component';
import { CrearUnidadInternaComponent } from './home/unidades-internas/crear-unidad-interna/crear-unidad-interna.component';
import { EditarUnidadInternaComponent } from './home/unidades-internas/editar-unidad-interna/editar-unidad-interna.component';
import { RolesComponent } from './home/roles/roles.component';
import { FlujoDeTareasComponent } from './home/flujo-de-tareas/flujo-de-tareas.component';
import { CrearFlujoDeTareasComponent } from './home/flujo-de-tareas/crear-flujo-de-tareas/crear-flujo-de-tareas.component';
import { VerFlujoDeTareasComponent } from './home/flujo-de-tareas/ver-flujo-de-tareas/ver-flujo-de-tareas.component';
import { NavFlujoDeTareasComponent } from './home/flujo-de-tareas/nav-flujo-de-tareas/nav-flujo-de-tareas.component';
import { TareasComponent } from './home/tareas/tareas.component';
import { CrearTareaComponent } from './home/tareas/crear-tarea/crear-tarea.component';
import { NavTareaComponent } from './home/tareas/nav-tarea/nav-tarea.component';
import { BarraComponent } from './home/barra/barra.component';
import { ComponentesDisenoComponent } from './home/componentes-diseno/componentes-diseno.component';
import { CardHeaderComponent } from './home/componentes-diseno/card-header/card-header.component';
import { BarTareaComponent } from './home/componentes-diseno/bar-tarea/bar-tarea.component';
import { CardBodyComponent } from './home/componentes-diseno/card-body/card-body.component';
import { BuscadorComponent } from './home/componentes-diseno/buscador/buscador.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'crear_usuario', component: CrearUsuariosComponent },
  { path: 'unidades_internas', component: UnidadesInternasComponent },
  { path: 'crear_unidad_interna', component: CrearUnidadInternaComponent },
  { path: 'editar_unidad_interna', component: EditarUnidadInternaComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'flujo_de_tareas', component: FlujoDeTareasComponent },
  { path: 'crear_flujo_de_tareas', component: CrearFlujoDeTareasComponent },
  { path: 'ver_flujo_de_tareas', component: VerFlujoDeTareasComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'crear_tarea', component: CrearTareaComponent },
  { path: 'nav_tarea', component: NavTareaComponent },
  { path: 'p', component: BarTareaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuariosComponent,
    CrearUsuariosComponent,
    NavComponent,
    UnidadesInternasComponent,
    CrearUnidadInternaComponent,
    EditarUnidadInternaComponent,
    RolesComponent,
    FlujoDeTareasComponent,
    CrearFlujoDeTareasComponent,
    VerFlujoDeTareasComponent,
    NavFlujoDeTareasComponent,
    TareasComponent,
    CrearTareaComponent,
    NavTareaComponent,
    BarraComponent,
    ComponentesDisenoComponent,
    CardHeaderComponent,
    BarTareaComponent,
    CardBodyComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      radius: 48,
      title: '100',
      titleFontSize: '32',
      titleColor: '#ffffff',
      showTitle: true,
      showUnits: true,
      unitsColor: '#ffffff',
      unitsFontSize: '32',
      outerStrokeWidth: 10,
      outerStrokeColor: '#f86d66',
      outerStrokeGradientStopColor: '#53a9ff',
      backgroundColor: '#000000',
      backgroundGradientStopColor: '#000000',
      backgroundStroke: '#000000',
      backgroundStrokeWidth: 0,
      backgroundPadding: 0,
      space: -10,
      maxPercent: 100,
      unitsFontWeight: '100',
      innerStrokeColor: '#9d9d9d',
      innerStrokeWidth: 10,
      titleFontWeight: '100',
      imageHeight: 20,
      imageWidth: 20,
      animateTitle: false,
      animationDuration: 1000,
      showSubtitle: false,
      clockwise: false,
      responsive: false,
      startFromZero: false,
      lazy: true,
    }),
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
