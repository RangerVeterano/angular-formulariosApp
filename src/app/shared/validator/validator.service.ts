import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  constructor() { }

  //El metodo devuelve un error de tipo ValidationError o bien de tipo null
  noPuedeSerStrider(control: FormControl): ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      //! Esta parte de aqui dentro se considera como un error
      return { noStrider: true }
    }
    //Regresar null en una validacion significa que todo está correcto
    return null;
  }

  //Metodo para comprobar que dos campos son iguales
  camposIguales(campo1: string, campo2: string) {

    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        //!En esta parte se devuelve el error

        //Le indicamos que el campo contraseña 2 tambien tiene error
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales: true } //Este error se marca a nivel general del formulario
      }

      //Le quitamos el error al campo contraseña 2
      formGroup.get(campo2)?.setErrors(null) //null indica que no tiene errores
      return null
    }
  }
}
