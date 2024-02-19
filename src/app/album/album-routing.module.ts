/* ••[1]••••••••••••••••••••••••• album-routing.module.ts •••••••••••••••••••••••••••••• */

import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    children: [
      {
        component: AlbumDetailComponent,
        path: ':id',
      },
    ],
    component: AlbumListComponent,
    path: '',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
})
export class AlbumRoutingModule {}
