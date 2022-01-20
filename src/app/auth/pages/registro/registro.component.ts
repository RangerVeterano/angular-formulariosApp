import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, Validator } from '@angular/forms';
//importacion de nuestra constante para la expresion regular
import { nombreApellidoPattern, emailPattern, noPuedeSerStrider } from '../../../shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {


  //Declaracion de mi formulario
  miFormulario: FormGroup = this.fb.group(
    {
      nombre: ['',
        [
          Validators.required,
          Validators.pattern(this.vs.nombreApellidoPattern)
        ]],
      email: ['',
        [
          Validators.required, Validators.email,
          Validators.pattern(this.vs.emailPattern)
        ],
        [
          this.ev
        ]],
      username: ['',
        [
          Validators.required,
          this.vs.noPuedeSerStrider
        ]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', [Validators.required]],
    },
    {
      validators: [
        this.vs.camposIguales('password', 'password2')
      ]
    })



  get emailErrorMsg(): string {

    const errors = this.miFormulario.get('email')?.errors;

    if (errors?.['required']) {
      return 'El correo es obligatorio'
    } else if (errors?.['pattern']) {
      return 'El correo no comple con el patron'
    } else if (errors?.['emailTomado']) {
      return 'El correo ya está en uso'
    }

    return ''
  }

  constructor(
    private fb: FormBuilder,
    private vs: ValidatorService,
    private ev: EmailValidatorService) { }

  ngOnInit(): void {

    this.miFormulario.reset({
      nombre: 'Ignacio Bohigues',
      email: "test1@test.com",
      username: 'RangerVeterano',
      password: '123456',
      password2: '123456'
    })
  }

  //Metodo para mostrar los errores del formulario
  campoNoValido(campo: string) {

    //Otra forma de sacar los errores que no sea con el controls
    return this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.get(campo)?.touched
  }

  // //Mostrar mensaje de que el correo es requerido
  // emailRequired() {
  //   return this.miFormulario.get('email')?.touched &&
  //     this.miFormulario.get('email')?.errors?.['required']

  // }

  // //Metodo para comprobar si el formato del correo es correcto
  // emailFormato() {
  //   return this.miFormulario.get('email')?.touched &&
  //     this.miFormulario.get('email')?.errors?.['pattern']

  // }

  // //Metodo para comprobar si el correo ya ha sido tomado antes
  // emailTomado() {
  //   return this.miFormulario.get('email')?.touched &&
  //     this.miFormulario.get('email')?.errors?.['emailTomado']

  // }

  //metodo para guardar el formulario
  submitFormulario() {

    //impresion por consola de los valores del campo
    console.log(this.miFormulario.value);

    //Cuando se haga el submit se marcan todos los campos como tocados
    this.miFormulario.markAllAsTouched()
  }

}
