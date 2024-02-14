/* ••[1]••••••••••••••••••••••••• user-list.component.ts •••••••••••••••••••••••••••••• */

import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UserIdT } from '../../app-data/users/user.type';
import { UsersService } from '../../app-data/users/users.service';

@Component({
  selector: 'app-user-list',
  styleUrl: './user-list.component.scss',
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  protected titleLabel: string = 'User list';
  protected contentLabel: string = 'These are the users in the system';
  protected listTitleLabel: string = 'Users';
  protected usersId$: Observable<Array<UserIdT>> = this.usersService.usersId$;

  public constructor(private readonly usersService: UsersService) {}
}
