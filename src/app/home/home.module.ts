/* ••[1]••••••••••••••••••••••••• home.module.ts •••••••••••••••••••••••••••••• */

import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [AngularMaterialModule, CommonModule],
})
export class HomeModule {}
