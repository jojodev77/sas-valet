import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AffaireCreateComponent } from './affaire-create/affaire-create.component';
import { AffaireListingComponent } from './affaire-listing/affaire-listing.component';
import { AffaireContainerComponent } from './affaire-container/affaire-container.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [AffaireCreateComponent, AffaireListingComponent, AffaireContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    AffaireContainerComponent,
    AffaireCreateComponent,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class AffaireModule { }
