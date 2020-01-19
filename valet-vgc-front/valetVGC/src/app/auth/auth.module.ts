import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

/** component */
import { SigninComponent } from './signin/signin.component';

/** services */
import { SigninService } from './services/signin.service';
import { AuthFormulaireService } from './services/auth-formulaire.service';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { TokenInterceptor } from './services/authInterceptor';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
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
    }
  ]
})
export class AuthModule { }
