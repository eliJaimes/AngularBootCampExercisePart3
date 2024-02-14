/* ••[1]••••••••••••••••••••••••• angular-material.module.ts •••••••••••••••••••••••••••••• */

import { NgModule, Type } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const AngularMaterialModules: Array<Type<unknown>> = [
  MatButtonModule,
  MatCardModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
];

@NgModule({
  exports: [AngularMaterialModules],
  imports: [AngularMaterialModules],
})
export class AngularMaterialModule {}
