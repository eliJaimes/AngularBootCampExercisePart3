/* ••[1]••••••••••••••••••••••••• home.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule],
})
export class HomeModule {}
