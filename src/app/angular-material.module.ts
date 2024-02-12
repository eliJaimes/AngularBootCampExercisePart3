/* ••[1]••••••••••••••••••••••••• angular-material.module.ts •••••••••••••••••••••••••••••• */

import { NgModule, Type } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

const AngularMaterialModules: Array<Type<unknown>> = [
  MatSlideToggleModule,
  MatToolbarModule,
];

@NgModule({
  exports: [AngularMaterialModules],
  imports: [AngularMaterialModules],
})
export class AngularMaterialModule {}
