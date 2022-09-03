import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './home/usuarios/usuarios.component';
import { CrearUsuariosComponent } from './home/crear-usuarios/crear-usuarios.component';
import { VerUsuarioComponent } from './home/ver-usuario/ver-usuario.component';
import { NavComponent } from './home/nav/nav.component';

const appRoutes:Routes=[

  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'crear_usuario', component:CrearUsuariosComponent},
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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
