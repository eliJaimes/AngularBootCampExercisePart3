/* ••[1]••••••••••••••••••••••••• album-list.component.ts •••••••••••••••••••••••••••••• */

import { combineLatest, map, Observable, startWith, Subject } from 'rxjs';
import { AlbumsService } from '../../app-data/albums/albums.service';
import { AlbumT } from '../../app-data/albums/album.type';
import { Component } from '@angular/core';

@Component({
  selector: 'app-album-list',
  styleUrl: './album-list.component.scss',
  templateUrl: './album-list.component.html',
})
export class AlbumListComponent {
  protected readonly titleLabel: string = 'Album list';
  protected readonly contentLabel: string = 'These are the albums available';
  protected readonly listTitleLabel: string = 'Albums';
  private albums$: Observable<Array<AlbumT>> = this.albumsService.albums$;

  protected filterValue: string = '';
  protected readonly filterLabel: string = 'Filter albums...';
  protected readonly noAlbumsLabel: string = 'No albums to show';

  private readonly filterSubject$$: Subject<string> = new Subject<string>();
  private readonly filter$: Observable<string> =
    this.filterSubject$$.asObservable();

  protected filteredAlbums$: Observable<Array<AlbumT>> = combineLatest(
    this.albums$,
    this.filter$.pipe(startWith(''))
  ).pipe(
    map(([albums, filter]: [Array<AlbumT>, string]): Array<AlbumT> => {
      filter = filter.toLowerCase();
      return albums.filter((album: AlbumT): boolean =>
        album.title.includes(filter)
      );
    })
  );

  public constructor(private readonly albumsService: AlbumsService) {}

  protected filterChangeHandler(event: string): void {
    this.filterSubject$$.next(event);
  }
}
