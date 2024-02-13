/* ••[1]••••••••••••••••••••••••• album.module.ts •••••••••••••••••••••••••••••• */

import { AlbumListComponent } from './album-list/album-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AlbumListComponent],
  imports: [CommonModule],
})
export class AlbumModule {}
