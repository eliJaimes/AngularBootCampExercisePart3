/* ••[1]••••••••••••••••••••••••• user-detail.component.ts •••••••••••••••••••••••••••••• */

import { ActivatedRoute, Params } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from '../../app-data/users/users.service';
import { UserT } from '../../app-data/users/user.type';

@Component({
  selector: 'app-user-detail',
  styleUrl: './user-detail.component.scss',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements AfterViewInit {
  protected userDetail$: Observable<UserT> = this.usersService.userDetail$;

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly usersService: UsersService
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.usersService.selectUser(Number(params['id']));
    });
  }
}
