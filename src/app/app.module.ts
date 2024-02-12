/* ••[1]••••••••••••••••••••••••• app.module.ts •••••••••••••••••••••••••••••• */

import { AngularMaterialModule } from './angular-material.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [AngularMaterialModule, AppRoutingModule, BrowserModule],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
