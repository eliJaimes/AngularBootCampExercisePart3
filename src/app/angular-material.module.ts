/* ••[1]••••••••••••••••••••••••• angular-material.module.ts •••••••••••••••••••••••••••••• */

import { NgModule, Type } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

const AngularMaterialModules: Array<Type<unknown>> = [
  LayoutModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule,
];

@NgModule({
  exports: [AngularMaterialModules],
  imports: [AngularMaterialModules],
})
export class AngularMaterialModule {}
