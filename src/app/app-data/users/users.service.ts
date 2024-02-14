/* ••[1]••••••••••••••••••••••••• users.service.ts •••••••••••••••••••••••••••••• */

import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserIdT, UserT } from './user.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl: string = 'api/users';

  private http: HttpClient = inject(HttpClient);

  public readonly users$: Observable<Array<UserT>> = this.http.get<
    Array<UserT>
  >(this.usersUrl);

  public readonly usersId$: Observable<Array<UserIdT>> = this.users$.pipe(
    map(
      (users: Array<UserT>): Array<UserIdT> =>
        users.map(
          (user: UserT): UserIdT => ({
            email: user.email,
            name: user.name,
          })
        )
    )
  );
}
