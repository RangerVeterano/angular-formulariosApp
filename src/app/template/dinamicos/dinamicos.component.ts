import { Component } from '@angular/core';

interface Persona {
  nombre: string,
  favoritos: Favorito[]
}

interface Favorito {
  id: Number,
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = ''

  persona: Persona = {
    nombre: 'Ignacio',
    favoritos: [
      {
        id: 1,
        nombre: 'Fallout New Vegas'
      },
      {
        id: 2,
        nombre: 'Ratchet and Clank 3'
      }
    ]
  }

  guardar() {
    console.log('Formulario guardado');
  }

  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...nuevoFavorito}) // rompemos la relacion con la variable
    this.nuevoJuego = '' //Vaciamos la variable
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1)
  }

}
