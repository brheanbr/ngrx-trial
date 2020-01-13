import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer.reducer';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CutomerViewComponent } from './cutomer-view/cutomer-view.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerAddComponent,
    CutomerViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      customers: CustomerReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
