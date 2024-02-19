/* ••[1]••••••••••••••••••••••••• is-logged.guard.ts •••••••••••••••••••••••••••••• */

import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import {
  SystemUserTypeE,
  SystemUserTypeT,
} from '../entities/systemUserType.type';
import { AuthenticateSystemUserService } from '../services/authenticate-system-user.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsLoggedGuard implements CanActivate {
  public constructor(
    private readonly authenticateSystemUserService: AuthenticateSystemUserService
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const validUserTypes: Array<SystemUserTypeE> = route.data['canActivate'];

    return this.authenticateSystemUserService.loggedAs$.pipe(
      map((loggedAs: SystemUserTypeT): boolean =>
        loggedAs ? validUserTypes.includes(loggedAs) : false
      )
    );
  }
}
