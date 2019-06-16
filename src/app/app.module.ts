import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
//import {RequiredIfDirective } from './shared/required-if-validator.directive';
import { EnabledControlDirective } from './shared/show-if-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmEqualValidatorDirective,
  //  RequiredIfDirective
    EnabledControlDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
