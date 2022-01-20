import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  // //Variable para declarar como va a ser nuestro formulario
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080ti'),
  //   precio: new FormControl(1800),
  //   existencias: new FormControl(10)
  // });

  // Practicamente igual que arriba
  // nombreCampo : ['valor por defecto', validadores sincronos, validadores asincronos]
  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(1)]],
    existencias: [, [Validators.required, Validators.min(1)]]
  })

  //Inyectamos nuestro servicio para la creacion de formulario
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    // Indicamos que queremos unos valores por defecto cuando se crea el objeto
    // Se puede usar el setValue, pero es mejor emplear el reset
    this.miFormulario.reset({
      nombre: 'RTX 4080ti',
      precio: 1600,
      existencias: 10
    })
  }

  //Metodo para mostrar mensajes de error en el html
  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
  }

  //Creamos metodo para gestionar el submit del formulario
  guardar() {

    //En el caso de que el formulario no sea valido
    if (this.miFormulario.invalid) {

      //Este metodo hace que todos los campos se toquen,
      // con eso conseguimos que todos los campos salgan los errores
      this.miFormulario.markAllAsTouched()
      return
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset() //Reseteamos todos los campos una vez guardados
  }

}
