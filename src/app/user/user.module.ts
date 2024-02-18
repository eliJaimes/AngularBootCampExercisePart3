/* ••[1]••••••••••••••••••••••••• user.module.ts •••••••••••••••••••••••••••••• */

import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [AngularMaterialModule, CommonModule, FormsModule, RouterModule],
})
export class UserModule {}
