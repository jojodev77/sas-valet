import { Injectable } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthFormulaireService {

  constructor(private fb: FormBuilder) { }

  buildForm() {
    return this.fb.group({
      lastName: new FormControl({
        value: '',
        disable: false
      }),
      password: new FormControl({
        value: '',
        disable: false
      }),
    });
  }
}
