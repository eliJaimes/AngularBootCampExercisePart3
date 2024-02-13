/* ••[1]••••••••••••••••••••••••• user.module.ts •••••••••••••••••••••••••••••• */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule],
})
export class UserModule {}
