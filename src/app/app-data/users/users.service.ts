/* ••[1]••••••••••••••••••••••••• users.service.ts •••••••••••••••••••••••••••••• */

import { combineLatest, map, Observable, Subject } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { UserIdT, UserT } from './user.type';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl: string = 'api/users';

  private userSelectedSubject$$: Subject<UserT['id']> = new Subject<
    UserT['id']
  >();

  private userSelected$: Observable<UserT['id']> =
    this.userSelectedSubject$$.asObservable();

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
            id: user.id,
            name: user.name,
          })
        )
    )
  );

  public readonly userDetail$: Observable<UserT> = combineLatest({
    users: this.users$,
    userSelected: this.userSelected$,
  }).pipe(
    map(
      ({
        users,
        userSelected,
      }: {
        users: Array<UserT>;
        userSelected: UserT['id'];
      }): UserT => {
        return users.find(
          (user: UserT): boolean => user.id === userSelected
        ) as UserT;
      }
    )
  );

  public selectUser(id: UserT['id']): void {
    this.userSelectedSubject$$.next(id);
  }
}
