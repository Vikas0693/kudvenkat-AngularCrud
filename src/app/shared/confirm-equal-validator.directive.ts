import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    
    //when applying validation on single control
    /*@Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): { [key: string]: any } | null {
        //alert(`appConfirmEqualValidator value:${this.appConfirmEqualValidator}`);
        //console.log(`${this.appConfirmEqualValidator}`);
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    } */

    //when applying validation on group
    validate(group: AbstractControl): { [key: string]: any } | null {
        const password = group.get('password');
        const confirmPassword = group.get('confirmPassword');
        if (password && confirmPassword && confirmPassword.value !== password.value) {
            return { 'notEqual': true };
        }
        return null;
    }
}