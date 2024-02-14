/* ••[1]••••••••••••••••••••••••• not-found.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
})
export class NotFoundModule {}
