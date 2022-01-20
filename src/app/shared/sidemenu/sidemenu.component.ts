import { Component } from '@angular/core';

interface MenuItem {
  text: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [`
  li {
    cursor:pointer
  }`]
})
export class SidemenuComponent {

  //Rutas para el mentu de los formularios por medio de template
  templateMenu: MenuItem[] = [
    {
      text: 'Básicos',
      ruta: './template/basicos'
    },
    {
      text: 'Dinámicos',
      ruta: './template/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './template/switches'
    }
  ];

  //Rutas para el formulario por medio del reactive
  reactiveMenu: MenuItem[] = [
    {
      text: 'Básicos',
      ruta: './reactive/basicos'
    },
    {
      text: 'Dinámicos',
      ruta: './reactive/dinamicos'
    },
    {
      text: 'Switches',
      ruta: './reactive/switches'
    }
  ];

  //Rutas para las validaciones
  validacionesMenu: MenuItem[] = [
    {
      text: 'login',
      ruta: './validaciones/login'
    },
    {
      text: 'registro',
      ruta: './validaciones/registro'
    }

  ];

}
