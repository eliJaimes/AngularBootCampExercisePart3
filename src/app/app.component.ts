/* ••[1]••••••••••••••••••••••••• app.component.ts •••••••••••••••••••••••••••••• */
import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected appName: string = 'Tour Of Heroes';

  protected themeChangeHandler(event: MatSlideToggleChange): void {
    console.log('%c\nthemeChangeHandler', 'color: SpringGreen');
    console.log('event: %O', event);
    const checked: boolean = event.checked;
    console.log('checked: %O', checked);
  }
}
