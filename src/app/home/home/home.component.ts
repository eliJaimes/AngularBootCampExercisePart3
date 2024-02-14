/* ••[1]••••••••••••••••••••••••• home.component.ts •••••••••••••••••••••••••••••• */

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrl: './home.component.scss',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  protected titleLabel: string = 'Home';
  protected contentLabel: string = 'This is our home component';
}
