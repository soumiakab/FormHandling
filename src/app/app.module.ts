import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CheckValidatorsEventComponent } from './components/reactive-forms/check-validators-event/check-validators-event.component';
import { Ex1Component } from './components/template-driven-forms/ex1/ex1.component';
import { Ex2Component } from './components/template-driven-forms/ex2/ex2.component';
import { Ex3Component } from './components/template-driven-forms/ex3/ex3.component';
import { RfEx1Component } from './components/reactive-forms/rf-ex1/rf-ex1.component';
import { RfEx2Component } from './components/reactive-forms/rf-ex2/rf-ex2.component';
import { RfEx3Component } from './components/reactive-forms/rf-ex3/rf-ex3.component';
import { RfEx4Component } from './components/reactive-forms/rf-ex4/rf-ex4.component';
import { RfEx5Component } from './components/reactive-forms/rf-ex5/rf-ex5.component';
import { RfEx6Component } from './components/reactive-forms/rf-ex6/rf-ex6.component';
import { RfEx7Component } from './components/reactive-forms/rf-ex7/rf-ex7.component';
import { ValidationComponent } from './components/template-driven-forms/validation/validation.component';
import { DynamiclyvalidationComponent } from './components/reactive-forms/dynamiclyvalidation/dynamiclyvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckValidatorsEventComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    RfEx1Component,
    RfEx2Component,
    RfEx3Component,
    RfEx4Component,
    RfEx5Component,
    RfEx6Component,
    RfEx7Component,
    ValidationComponent,
    DynamiclyvalidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
