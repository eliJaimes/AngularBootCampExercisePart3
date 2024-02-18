/* ••[1]••••••••••••••••••••••••• app-routing.module.ts •••••••••••••••••••••••••••••• */

import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './album/album-detail/album-detail.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { HomeComponent } from './home/home/home.component';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    children: [
      {
        component: AlbumDetailComponent,
        path: ':id',
      },
    ],
    component: AlbumListComponent,
    path: 'albums',
  },
  {
    children: [
      {
        component: UserDetailComponent,
        path: ':id',
      },
    ],
    component: UserListComponent,
    path: 'users',
  },
  {
    component: NotFoundComponent,
    data: {
      notFound: 'true',
    },
    path: '**',
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
