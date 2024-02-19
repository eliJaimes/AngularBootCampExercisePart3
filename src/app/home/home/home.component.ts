/* ••[1]••••••••••••••••••••••••• home.component.ts •••••••••••••••••••••••••••••• */

import { AuthenticateSystemUserService } from '../../services/authenticate-system-user.service';
import { Component } from '@angular/core';
import { SystemUserTypeE } from '../../entities/systemUserType.type';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected systemUserTypeE: typeof SystemUserTypeE = SystemUserTypeE;

  protected titleLabel: string = 'Home';
  protected contentLabel: string = 'This is our home component';

  protected logOutLabel: string = 'Log out';

  protected logAsRegularUserLabel: string =
    'Log In as <strong style="padding: 0 .5em">REGULAR</strong> user';

  protected logAsAdminUserLabel: string =
    'Log In as <strong style="padding: 0 .5em">ADMIN</strong> user';

  public constructor(
    protected readonly authenticateSystemUserService: AuthenticateSystemUserService
  ) {}
}
