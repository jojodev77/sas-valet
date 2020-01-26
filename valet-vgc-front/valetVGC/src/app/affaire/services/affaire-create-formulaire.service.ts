import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AffaireCreateFormulaireService {

  constructor(private formBuilder: FormBuilder) { }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      affairCode: new FormControl({
        value: '',
        disabled: false,
      }),
      affairCreateDate: new FormControl({
        value: '',
        disabled: false,
      }),
      affairToDelivreDate: new FormControl({
        value: '',
        disabled: false,
      }),
      affairShema: new FormControl({
        value: '',
        disabled: false,
      }),
      affairNumberToCreate: new FormControl({
        value: '',
        disabled: false,
      }),
      affairNumberDelivred: new FormControl({
        value: '',
        disabled: false,
      }),
      affairValidator: new FormControl({
        value: '',
        disabled: false,
      }),
      affairClientLabel: new FormControl({
        value: '',
        disabled: false,
      }),
    });
  }
}
