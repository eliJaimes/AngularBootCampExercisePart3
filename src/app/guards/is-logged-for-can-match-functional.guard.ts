/* ••[1]••••••••••••••••••••••••• is-logged-for-can-match-functional.guard.ts •••••••••••••••••••••••••••••• */

import { CanMatchFn, Route, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import {
  SystemUserTypeE,
  SystemUserTypeT,
} from '../entities/systemUserType.type';
import { AuthenticateSystemUserService } from '../services/authenticate-system-user.service';
import { inject } from '@angular/core';

export const isLoggedForCanMatchFunctionalGuard = (
  validUserTypes: Array<SystemUserTypeE> = []
): CanMatchFn => {
  return (
    _route: Route,
    _segments: Array<UrlSegment>
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree => {
    const authenticateSystemUserService: AuthenticateSystemUserService = inject(
      AuthenticateSystemUserService
    );

    return authenticateSystemUserService.loggedAs$.pipe(
      map((loggedAs: SystemUserTypeT): boolean =>
        loggedAs ? validUserTypes.includes(loggedAs) : false
      )
    );
  };
};
