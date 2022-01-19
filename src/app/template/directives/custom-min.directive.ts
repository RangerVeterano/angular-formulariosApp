import { Directive, Input } from "@angular/core";
import { AbstractControl, FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirective,
        multi: true
    }]
})
export class CustomMinDirective implements Validator {

    //Declaramos nuestra variable
    @Input() minimo!: number; //Es un numero y especificamos que siempre va a tener valor

    constructor() { }

    validate(control: FormControl) {
        const inputValue = control.value

        //si el numero recibido es menor que 0 salta error en 
        //caso contrario se devuelve null y como si nada
        return (inputValue < this.minimo) ? { 'customMin': true } : null
    }
}
