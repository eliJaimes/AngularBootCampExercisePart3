/* ••[1]••••••••••••••••••••••••• is-logged-functional.guard.ts •••••••••••••••••••••••••••••• */

import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import {
  SystemUserTypeE,
  SystemUserTypeT,
} from '../entities/systemUserType.type';
import { AuthenticateSystemUserService } from '../services/authenticate-system-user.service';
import { inject } from '@angular/core';

export const isLoggedFunctionalGuard = (
  validUserTypes: Array<SystemUserTypeE> = []
): CanActivateFn => {
  return (
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
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
