/* ••[1]••••••••••••••••••••••••• home.module.ts •••••••••••••••••••••••••••••• */

import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SanitizeHtmlPipe } from '../pipes/sanitize-html.pipe';

@NgModule({
  declarations: [HomeComponent, SanitizeHtmlPipe],
  exports: [SanitizeHtmlPipe],
  imports: [AngularMaterialModule, CommonModule, RouterModule],
})
export class HomeModule {}
