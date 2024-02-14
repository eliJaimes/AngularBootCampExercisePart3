/* ••[1]••••••••••••••••••••••••• user.module.ts •••••••••••••••••••••••••••••• */

import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [AngularMaterialModule, CommonModule],
})
export class UserModule {}
