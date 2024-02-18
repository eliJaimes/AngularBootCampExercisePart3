/* ••[1]••••••••••••••••••••••••• user-list.component.ts •••••••••••••••••••••••••••••• */

import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  combineLatest,
  fromEvent,
  map,
  merge,
  Observable,
  startWith,
} from 'rxjs';
import { UserIdT } from '../../app-data/users/user.type';
import { UsersService } from '../../app-data/users/users.service';

@Component({
  selector: 'app-user-list',
  styleUrl: './user-list.component.scss',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements AfterViewInit {
  @ViewChild('filterRef')
  private readonly filterRef!: ElementRef;

  @ViewChild('clearFilterRef', { read: ElementRef })
  private readonly clearFilterRef!: ElementRef;

  protected titleLabel: string = 'User list';
  protected contentLabel: string = 'These are the users in the system';
  protected listTitleLabel: string = 'Users';
  private usersId$: Observable<Array<UserIdT>> = this.usersService.usersId$;

  protected readonly filterLabel: string = 'Filter users...';
  protected readonly noUsersLabel: string = 'No users to show';

  private filter$!: Observable<string>;

  protected filteredUsersId$!: Observable<Array<UserIdT>>;

  public constructor(
    private readonly usersService: UsersService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  public ngAfterViewInit(): void {
    const filterEvent$: Observable<InputEvent> = fromEvent<InputEvent>(
      this.filterRef.nativeElement,
      'input'
    );

    const clearFilter$: Observable<PointerEvent> = fromEvent<PointerEvent>(
      this.clearFilterRef.nativeElement,
      'click'
    );

    this.filter$ = merge(filterEvent$, clearFilter$).pipe(
      map(
        (_data: InputEvent | PointerEvent): string =>
          this.filterRef.nativeElement.value
      ),
      startWith('')
    );

    this.filteredUsersId$ = combineLatest(this.usersId$, this.filter$).pipe(
      map(([users, filter]: [Array<UserIdT>, string]): Array<UserIdT> => {
        filter = filter.toLowerCase();
        return users.filter(
          (user: UserIdT): boolean =>
            user.name.includes(filter) || user.email.includes(filter)
        );
      })
    );
  }

  protected selectUser(userId: number): void {
    /* NOTE: we can pass an absolute path */
    // this.router.navigate(['users', userId]);

    /* NOTE: or we can use a relative path with the following configuration */
    this.router.navigate([userId], {
      relativeTo: this.activatedRoute,
    });
  }
}
