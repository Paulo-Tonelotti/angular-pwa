import  { BrowserModule }  from '@angular/platform-browser';
import  { AppComponent }  from './app.component';

import  { HttpClientModule } from "@angular/common/http"
import  { BrowserAnimationsModule }  from '@angular/platform-browser/animations';
import  { MaterialModule } from './material.module';
import  { NgModule, CUSTOM_ELEMENTS_SCHEMA }  from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
