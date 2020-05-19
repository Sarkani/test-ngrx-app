import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { StoreModule } from '@ngrx/store';
import { ngrxStore } from './testngrx.reducers';

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({storeData: ngrxStore})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
