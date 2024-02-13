/* ••[1]••••••••••••••••••••••••• app-routing.module.ts •••••••••••••••••••••••••••••• */

import { RouterModule, Routes } from '@angular/router';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: AlbumListComponent,
    path: 'albums',
  },
  {
    component: UserListComponent,
    path: 'users',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
