import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** Module */
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { AffaireModule } from './affaire/affaire.module';
import { AffaireModuleRouting } from './affaire/affaire.module.routing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    AuthModule,
    AngularMaterialModule,
    AffaireModuleRouting,
    AffaireModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
