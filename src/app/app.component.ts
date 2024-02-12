/* ••[1]••••••••••••••••••••••••• app.component.ts •••••••••••••••••••••••••••••• */
import { Component, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected appName: string = 'Tour Of Heroes';

  public constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly renderer2: Renderer2
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
