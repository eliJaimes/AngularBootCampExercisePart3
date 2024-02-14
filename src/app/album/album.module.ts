/* ••[1]••••••••••••••••••••••••• album.module.ts •••••••••••••••••••••••••••••• */

import { AlbumListComponent } from './album-list/album-list.component';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AlbumListComponent],
  imports: [AngularMaterialModule, CommonModule],
})
export class AlbumModule {}
