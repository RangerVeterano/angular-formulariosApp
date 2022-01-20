import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthRoutingModule } from './auth-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,  //importamos nuestras rutas hijas para que estén diposibles
    ReactiveFormsModule //importamos el modulo para los formularios reactivos
  ]
})
export class AuthModule { }
