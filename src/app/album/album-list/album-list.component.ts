/* ••[1]••••••••••••••••••••••••• album-list.component.ts •••••••••••••••••••••••••••••• */

import { Component } from '@angular/core';

@Component({
  selector: 'app-album-list',
  styleUrl: './album-list.component.scss',
  templateUrl: './album-list.component.html',
})
export class AlbumListComponent {
  protected titleLabel: string = 'Album list';
  protected contentLabel: string = 'These are the albums available';
}
