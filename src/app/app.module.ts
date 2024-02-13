/* ••[1]••••••••••••••••••••••••• app.module.ts •••••••••••••••••••••••••••••• */

import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { AppData } from './app-data/app-data';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(AppData, { delay: 1000 }),
  ],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
