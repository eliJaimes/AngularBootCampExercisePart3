/* ••[1]••••••••••••••••••••••••• user-list.component.ts •••••••••••••••••••••••••••••• */

import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  styleUrl: './user-list.component.scss',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  protected titleLabel: string = 'User list';
  protected contentLabel: string = 'These are the users in the system';
}
