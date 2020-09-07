import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms'
import { Directive } from '@angular/core';

@Directive({
    selector: '[appSelectValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: SelectRequiredValidatorDirective,
        multi: true
    }]
})
export class SelectRequiredValidatorDirective implements Validator {
    //returns null if validation passes
    validate(control: AbstractControl): {[key: string]: any} | null {
        return control.value == '-1'? {'defaultSelected':true} : null;
    }

}