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
import { RolComponent } from './home/roles/rol/rol.component';
import { FlujoDeTareasComponent } from './home/flujo-de-tareas/flujo-de-tareas.component';
import { CrearFlujoDeTareasComponent } from './home/flujo-de-tareas/crear-flujo-de-tareas/crear-flujo-de-tareas.component';
import { VerFlujoDeTareasComponent } from './home/flujo-de-tareas/ver-flujo-de-tareas/ver-flujo-de-tareas.component';
import { NavFlujoDeTareasComponent } from './home/flujo-de-tareas/nav-flujo-de-tareas/nav-flujo-de-tareas.component';
import { TareasComponent } from './home/tareas/tareas.component';
import { CrearTareaComponent } from './home/tareas/crear-tarea/crear-tarea.component';
import { NavTareaComponent } from './home/tareas/nav-tarea/nav-tarea.component';
import { BarraComponent } from './home/barra/barra.component';
import { CardHeaderComponent } from './home/componentes-diseno/card-header/card-header.component';
import { BarTareaComponent } from './home/componentes-diseno/bar-tarea/bar-tarea.component';
import { CardBodyComponent } from './home/componentes-diseno/card-body/card-body.component';
import { BuscadorComponent } from './home/componentes-diseno/buscador/buscador.component';
import { BarUsuarioComponent } from './home/componentes-diseno/bar-usuario/bar-usuario.component';
import { BarSubtareaComponent } from './home/componentes-diseno/bar-subtarea/bar-subtarea.component';
import { BarRolComponent } from './home/componentes-diseno/bar-rol/bar-rol.component';
import { TareaComponent } from './home/tareas/tarea/tarea.component';
import { UsuarioComponent } from './home/usuarios/usuario/usuario.component';
import { BarFlujoComponent } from './home/componentes-diseno/bar-flujo/bar-flujo.component';
import { NavUnidadComponent } from './home/unidades-internas/nav-unidad/nav-unidad.component';
import { TareaSubordinadaComponent } from './home/tareas/tarea-subordinada/tarea-subordinada.component';
import { ReportarTareaComponent } from './home/tareas/reportar-tarea/reportar-tarea.component';
import { AddUsuarioComponent } from './home/usuarios/add-usuario/add-usuario.component';
import { CrearTareaSubordinadaComponent } from './home/tareas/crear-tarea-subordinada/crear-tarea-subordinada.component';
import { HistorialComponent } from './home/tareas/historial/historial.component';

//pipes
import { FiltroPipe } from './pipes/filtro-Tarea.pipe';
import { FiltrousuarioPipe } from './pipes/filtro-Usuario.pipe';
import { FiltroRolPipe } from './pipes/filtro-Rol.pipe';
import { BarResponsableComponent } from './home/componentes-diseno/bar-responsable/bar-responsable.component';
import { BarListaRolesComponent } from './home/componentes-diseno/bar-lista-roles/bar-lista-roles.component';
import { NavRolComponent } from './home/roles/nav-rol/nav-rol.component';
import { CrearRolComponent } from './home/roles/crear-rol/crear-rol.component';
import { FiltroUnidadPipe } from './pipes/filtro-unidad.pipe';
import { FiltroFlujoPipe } from './pipes/filtro-flujo.pipe';
import { FiltroSubordinadaPipe } from './pipes/filtro-subordinada.pipe';
import { BarUnidadComponent } from './home/componentes-diseno/bar-unidad/bar-unidad.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/:id', component: UsuarioComponent },
  { path: 'crear_usuario', component: CrearUsuariosComponent },
  { path: 'unidades_internas', component: UnidadesInternasComponent },
  { path: 'crear_unidad_interna', component: CrearUnidadInternaComponent },
  { path: 'unidad_interna/:id', component: EditarUnidadInternaComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'crear_rol', component: CrearRolComponent },
  { path: 'rol/:id', component: RolComponent },
  { path: 'flujo_de_tareas', component: FlujoDeTareasComponent },
  { path: 'crear_flujo_de_tareas', component: CrearFlujoDeTareasComponent },
  { path: 'flujo_de_tarea/:id', component: VerFlujoDeTareasComponent },
  { path: 'tareas', component: TareasComponent },
  { path: 'tarea/:id', component: TareaComponent },
  { path: 'tarea_subordinada', component: TareaSubordinadaComponent },
  { path: 'historial', component: HistorialComponent },
  {
    path: 'crear_subordinada',
    component: CrearTareaSubordinadaComponent,
  },
  { path: 'reportar_tarea', component: ReportarTareaComponent },
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
    UsuarioComponent,
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
    TareaComponent,
    CrearTareaComponent,
    NavTareaComponent,
    BarraComponent,
    CardHeaderComponent,
    BarTareaComponent,
    CardBodyComponent,
    BuscadorComponent,
    BarUsuarioComponent,
    BarSubtareaComponent,
    BarRolComponent,
    BarFlujoComponent,
    NavUnidadComponent,
    TareaSubordinadaComponent,
    ReportarTareaComponent,
    AddUsuarioComponent,
    CrearTareaSubordinadaComponent,
    HistorialComponent,
    FiltroPipe,
    FiltroRolPipe,
    FiltrousuarioPipe,
    BarResponsableComponent,
    BarListaRolesComponent,
    RolComponent,
    NavRolComponent,
    CrearRolComponent,
    FiltroUnidadPipe,
    FiltroFlujoPipe,
    FiltroSubordinadaPipe,
    BarUnidadComponent,
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
