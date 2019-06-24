import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { PaidUsersComponent } from './paid-users/paid-users.component';

@NgModule({
  declarations: [
    AppComponent,
    PaidUsersComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents:[
    PaidUsersComponent
  ]
})
export class AppModule {

    constructor(private injector: Injector) {

    }

    ngDoBootstrap() {
      const el = createCustomElement(PaidUsersComponent, { injector: this.injector });
      customElements.define('paid-users', el);
    }

 }
