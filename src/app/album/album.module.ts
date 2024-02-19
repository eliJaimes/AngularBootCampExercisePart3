/* ••[1]••••••••••••••••••••••••• album.module.ts •••••••••••••••••••••••••••••• */

import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumRoutingModule } from './album-routing.module';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [AlbumListComponent, AlbumDetailComponent],
  imports: [
    AlbumRoutingModule,
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
})
export class AlbumModule {}
