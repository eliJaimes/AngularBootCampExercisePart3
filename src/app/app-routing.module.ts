/* ••[1]••••••••••••••••••••••••• app-routing.module.ts •••••••••••••••••••••••••••••• */

import { RouterModule, Routes } from '@angular/router';
import { AlbumDetailComponent } from './album/album-detail/album-detail.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { HomeComponent } from './home/home/home.component';
import { isLoggedFunctionalGuard } from './guards/is-logged-functional.guard';
import { IsLoggedGuard } from './guards/is-logged.guard';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found/not-found.component';
import { SystemUserTypeE } from './entities/systemUserType.type';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    canActivate: [IsLoggedGuard],
    children: [
      {
        component: AlbumDetailComponent,
        path: ':id',
      },
    ],
    component: AlbumListComponent,
    data: {
      canActivate: [SystemUserTypeE.regularUser, SystemUserTypeE.adminUser],
    },
    path: 'albums',
  },
  {
    canActivate: [isLoggedFunctionalGuard([SystemUserTypeE.adminUser])],
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
