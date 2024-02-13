/* ••[1]••••••••••••••••••••••••• users.service.ts •••••••••••••••••••••••••••••• */

import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserT } from './user.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersUrl: string = 'api/users';

  private http: HttpClient = inject(HttpClient);

  public readonly users$: Observable<Array<UserT>> = this.http.get<
    Array<UserT>
  >(this.usersUrl);
}
