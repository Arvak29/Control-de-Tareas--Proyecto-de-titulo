import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { CrearUsuariosComponent } from './home/usuarios/crear-usuarios/crear-usuarios.component';
import { VerUsuarioComponent } from './home/usuarios/ver-usuario/ver-usuario.component';
import { NavComponent } from './home/usuarios/nav/nav.component';
import { UnidadesInternasComponent } from './home/unidades-internas/unidades-internas.component';
import { CrearUnidadInternaComponent } from './home/unidades-internas/crear-unidad-interna/crear-unidad-interna.component';
import { EditarUnidadInternaComponent } from './home/unidades-internas/editar-unidad-interna/editar-unidad-interna.component';
import { RolesComponent } from './home/roles/roles.component';

const appRoutes:Routes=[

  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'crear_usuario', component:CrearUsuariosComponent},
  {path:'unidades_internas', component:UnidadesInternasComponent},
  {path:'crear_unidad_interna', component:CrearUnidadInternaComponent},
  {path:'editar_unidad_interna', component:EditarUnidadInternaComponent},
  {path:'roles', component:RolesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsuariosComponent,
    CrearUsuariosComponent,
    VerUsuarioComponent,
    NavComponent,
    UnidadesInternasComponent,
    CrearUnidadInternaComponent,
    EditarUnidadInternaComponent,
    RolesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
