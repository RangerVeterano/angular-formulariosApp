import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]

  });

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, condiciones: false })

    //Parece que podemos hacer que el formulario sea reactivo
    this.miFormulario.valueChanges
      .subscribe(({condiciones, ...rest}) => {
        
        this.persona = rest;
      })
  }

  //Metodo para guardar los datos del formulario
  guardar() {

    const formValue = { ...this.miFormulario.value };

    //Delete eleminina una propiedad e un objeto
    delete formValue.condiciones;

    //Guardamos los datos del formulario a la persona
    this.persona = formValue;
  }

}
