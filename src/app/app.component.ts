/* ••[1]••••••••••••••••••••••••• app.component.ts •••••••••••••••••••••••••••••• */
import { ActivationStart, Router } from '@angular/router';
import { Component, Inject, Renderer2 } from '@angular/core';
import { filter, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { LinkT } from './entities/link.type';
import { map } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected appName: string = 'Tour Of Heroes';

  protected links: Array<LinkT> = [
    {
      exact: true,
      label: 'Home',
      path: '',
    },
    {
      label: 'Albums',
      path: 'albums',
    },
    {
      label: 'Users',
      path: 'users',
    },
  ];

  protected hideMatTabNavBar$: Observable<boolean> = this.router.events.pipe(
    filter((data: unknown): boolean => data instanceof ActivationStart),
    map(
      (data: unknown): boolean =>
        !(data as ActivationStart).snapshot.data['notFound']
    )
  );

  public constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer2: Renderer2,
    private readonly router: Router
  ) {}

  protected themeChangeHandler(event: MatSlideToggleChange): void {
    /* NOTE: while accessing the DOM directly works */
    // if (event.checked) {
    //   this.document.body.classList.add('dark');
    // } else {
    //   this.document.body.classList.remove('dark');
    // }

    /* NOTE: it is a good practice to use the Rendered2 as a proxy */
    if (event.checked) {
      this.renderer2.addClass(this.document.body, 'dark');
    } else {
      this.renderer2.removeClass(this.document.body, 'dark');
    }
  }
}
