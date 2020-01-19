import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

/** component */
import { SigninComponent } from './signin/signin.component';

/** services */
import { SigninService } from './services/signin.service';
import { AuthFormulaireService } from './services/auth-formulaire.service';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule
  ],
  exports: [
  SigninComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [
    SigninService,
    AuthFormulaireService
  ]
})
export class AuthModule { }
