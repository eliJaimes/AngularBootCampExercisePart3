/* ••[1]••••••••••••••••••••••••• album-list.component.ts •••••••••••••••••••••••••••••• */

import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { combineLatest, map, Observable, startWith, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../app-data/albums/albums.service';
import { AlbumT } from '../../app-data/albums/album.type';

@Component({
  selector: 'app-album-list',
  styleUrl: './album-list.component.scss',
  templateUrl: './album-list.component.html',
})
export class AlbumListComponent implements OnInit {
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

  protected isAtLeastMediumBreakpoint$!: Observable<{
    matches: boolean;
  }>;

  public constructor(
    private readonly albumsService: AlbumsService,
    private readonly breakpointObserver: BreakpointObserver
  ) {}

  public ngOnInit(): void {
    this.isAtLeastMediumBreakpoint$ = this.breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .pipe(
        map((breakpointState: BreakpointState): { matches: boolean } => ({
          matches: breakpointState.matches,
        }))
      );
  }

  protected filterChangeHandler(event: string): void {
    this.filterSubject$$.next(event);
  }
}
