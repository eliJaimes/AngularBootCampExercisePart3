/* ••[1]••••••••••••••••••••••••• album-detail.component.ts •••••••••••••••••••••••••••••• */

import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-detail',
  styleUrl: './album-detail.component.scss',
  templateUrl: './album-detail.component.html',
})
export class AlbumDetailComponent implements OnInit {
  protected albumId!: number;

  public constructor(private readonly activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    /* NOTE: this snapshot will only be updated when the component gets created */
    this.albumId = +this.activatedRoute.snapshot.params['id'];
    console.log('this.albumId by snapshot: %O', this.albumId);

    /* NOTE: this will happen every time the router react to subsequent changes */
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.albumId = Number(params['id']);
      console.log('this.albumId by subscription: %O', this.albumId);
    });

    /* HACK: https://angular.io/guide/router-tutorial-toh#observable-parammap-and-component-reuse */
    /* When subscribing to an observable in a component, you almost always
    unsubscribe when the component is destroyed.

    However, ActivatedRoute observables are among the exceptions because
    ActivatedRoute and its observables are insulated from the Router itself. The
    Router destroys a routed component when it is no longer needed. This means
    all the component's members will also be destroyed, including the injected
    ActivatedRoute and the subscriptions to its Observable properties */
  }
}
