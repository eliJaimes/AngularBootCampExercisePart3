/* ••[1]••••••••••••••••••••••••• app.component.ts •••••••••••••••••••••••••••••• */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class AppComponent {
  protected appName: string = 'Tour Of Heroes';
}
