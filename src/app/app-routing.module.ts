/* ••[1]••••••••••••••••••••••••• app-routing.module.ts •••••••••••••••••••••••••••••• */

/* eslint-disable @typescript-eslint/no-explicit-any */

import { RouterModule, Routes } from '@angular/router';
import { AlbumModule } from './album/album.module';
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
    data: {
      canActivate: [SystemUserTypeE.regularUser, SystemUserTypeE.adminUser],
    },
    loadChildren: (): Promise<typeof AlbumModule> =>
      import('./album/album.module').then(
        (m: any): typeof AlbumModule => m.AlbumModule
      ),
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
