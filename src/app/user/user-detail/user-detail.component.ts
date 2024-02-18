/* ••[1]••••••••••••••••••••••••• user-detail.component.ts •••••••••••••••••••••••••••••• */

import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  styleUrl: './user-detail.component.scss',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  protected userId!: number;

  public constructor(private readonly activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    /* NOTE: this snapshot will only be updated when the component gets created */
    this.userId = +this.activatedRoute.snapshot.params['id'];
    console.log('this.userId by snapshot: %O', this.userId);

    /* NOTE: this will happen every time the router react to subsequent changes */
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.userId = Number(params['id']);
      console.log('this.userId by subscription: %O', this.userId);
    });
  }
}
