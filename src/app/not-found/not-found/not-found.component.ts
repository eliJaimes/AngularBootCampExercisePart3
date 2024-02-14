/* ••[1]••••••••••••••••••••••••• not-found.component.ts •••••••••••••••••••••••••••••• */

import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  styleUrl: './not-found.component.scss',
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent {
  protected titleLabel: string = 'Not Found';
  protected contentLabel: string =
    'The path you are looking for does not exist';

  protected actionButtonLabel: string = 'Go home';
}
