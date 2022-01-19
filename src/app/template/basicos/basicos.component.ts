import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  //Para recibir un componente que viene del padre
  // @Input() 

  // Para emitir un evento del hijo al padre
  // @Output

  //Para poder acceder a los elemento por referencia local
  //La varable va a tener valor luego de que se ejecute el ngOnInit asi que le ponemos el "!"
  @ViewChild('miFormulario') miFormulario !: NgForm;

  initForm = {
    producto: 'RTX 4080ti',
    precio: 0,
    existencias: 10
  }

  constructor() { }

  ngOnInit(): void {
  }

  //metodo para comprobar que el valor de producto sea valido,
  //Esto sirve para mostrar el mensaje de error en el html
  nombreValido(): boolean {
    //Le indicamos antes del controls de que si existe que lo evalue
    //DE todas formas le tenemos que indicar que sabemos lo que hacemos
    return this.miFormulario?.controls['producto']?.errors! && this.miFormulario?.controls['producto']?.touched!
  }

  precioValido(): boolean {
    return this.miFormulario?.controls['precio']?.errors! && this.miFormulario?.controls['precio']?.touched!
  }


  //Metodo que se ejecuta cuando se envia el formulario
  guardar() {

    console.log('Se han guardado lo datos');//Avisamos de que los datos se han guardado
    //reiniciamos los valores del formulario
    //Además podemos especificar los valores de los campos
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    })
  }

}
