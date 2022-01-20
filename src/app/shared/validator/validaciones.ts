import { FormControl } from '@angular/forms';
// Expresion regular para el campo de nombre
// Esta expresion significa que tiene que tener cualquier caracter desde la a hasta la z tanto en minuscula
// como en mayusculas y el mas significa todos los caracteres que queramos, luego lo sigue un espacio y luego 
// otra vez lo mismo
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

//Hemos creado una funcion de flecha
/*
    function noPuedeSerStrider(args) { }
*/
export const noPuedeSerStrider = (control: FormControl) => {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
        //! Esta parte de aqui dentro se considera como un error
        return { noStrider: true }
    }
    //Regresar null en una validacion significa que todo está correcto
    return null;
    console.log(valor);
}