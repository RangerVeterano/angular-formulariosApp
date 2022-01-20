import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  //Mi control del formulario principal
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Fallout New Vegas', Validators.required],
      ['H3VR', Validators.required]
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  //Getter del arreglo de favoritos
  get favoritosArr() {
    // Le decimos que lo que devolvemos son los controles del formulario
    // Pero lo devolvemos como formArray
    return this.miFormulario.get('favoritos') as FormArray
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  //metodo para borrar juegos favoritos
  borrar(index:number) { 
    this.favoritosArr.removeAt(index)
  } 

  //Metodo para realizar el submit del formulario
  guardar() {

    //Si el formulario no es valido
    if (this.miFormulario.invalid) {

      //Marcamos todos los campos tocados
      this.miFormulario.markAllAsTouched()
      return; //Salimos de la funcion
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset() //Reseteamos todos los campos
  }

  //Metodo para mostrar los errores de un campo
  campoValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  }

  agregarFavorito() {
    if (this.nuevoFavorito.invalid) {
      return;
    }

    // Tenemos que añadir el nuevo elemento pero 
    // se tiene que añadir como un form control
    this.favoritosArr.push(this.fb.control(
      this.nuevoFavorito.value,
      Validators.required));

    //Vaciamos el valor de nuevo favorito
    this.nuevoFavorito.reset()
  }

}
