import { AbstractControl, ValidatorFn } from "@angular/forms";

export function dobValidator(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } | null => {
        const dob = new Date(control.value);
        const currentDate = new Date();

        if(dob >= currentDate) {
            return { invalidDob: true };
        }
        return null;
    }

};