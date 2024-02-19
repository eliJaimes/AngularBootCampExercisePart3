/* ••[1]••••••••••••••••••••••••• is-logged-functional.guard.ts •••••••••••••••••••••••••••••• */

import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

export const isLoggedFunctionalGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  _state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  console.log('route: %O', route);
  return false;
};
