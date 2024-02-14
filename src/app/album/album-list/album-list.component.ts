/* ••[1]••••••••••••••••••••••••• album-list.component.ts •••••••••••••••••••••••••••••• */

import { AlbumsService } from '../../app-data/albums/albums.service';
import { AlbumT } from '../../app-data/albums/album.type';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-list',
  styleUrl: './album-list.component.scss',
  templateUrl: './album-list.component.html',
})
export class AlbumListComponent {
  protected titleLabel: string = 'Album list';
  protected contentLabel: string = 'These are the albums available';
  protected listTitleLabel: string = 'Albums';
  protected albums$: Observable<Array<AlbumT>> = this.albumsService.albums$;

  public constructor(private readonly albumsService: AlbumsService) {}
}
