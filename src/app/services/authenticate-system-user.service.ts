/* ••[1]••••••••••••••••••••••••• authenticate-system-user.service.ts •••••••••••••••••••••••••••••• */

import { BehaviorSubject, Observable } from 'rxjs';
import {
  SystemUserTypeE,
  SystemUserTypeT,
} from '../entities/systemUserType.type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticateSystemUserService {
  private readonly loggedAsSubject$$: BehaviorSubject<SystemUserTypeT> =
    new BehaviorSubject<SystemUserTypeT>(null);

  public readonly loggedAs$: Observable<SystemUserTypeT> =
    this.loggedAsSubject$$.asObservable();

  public logInAs(systemUserTypeE: SystemUserTypeE): void {
    this.loggedAsSubject$$.next(systemUserTypeE);
  }

  public logOut(): void {
    this.loggedAsSubject$$.next(null);
  }
}
