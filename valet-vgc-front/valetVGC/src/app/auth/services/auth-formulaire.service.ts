import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthFormulaireService {

  constructor(private fb: FormBuilder) { }

  buildForm(): FormGroup {
    return this.fb.group({
      lastName: new FormControl({
        value: '',
        disabled: false,
      }),
      password: new FormControl({
        value: '',
        disabled: false,
      }),
    });
  }
}
