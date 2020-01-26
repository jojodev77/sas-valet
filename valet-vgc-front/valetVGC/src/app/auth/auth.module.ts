import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/authInterceptor';
import { ReactiveFormsModule } from '@angular/forms';

/** component */
import { SigninComponent } from './signin/signin.component';
import { ModalComponent } from '../angular-material/components/modal/modal.component';

/** services */
import { SigninService } from './services/signin.service';
import { AuthFormulaireService } from './services/auth-formulaire.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';





@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
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
    AuthFormulaireService,
     {
       provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
       multi: true
     },
  ],
  entryComponents: [
    ModalComponent
  ],
})
export class AuthModule { }
