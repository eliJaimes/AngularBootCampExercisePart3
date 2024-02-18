/* ••[1]••••••••••••••••••••••••• albums.service.ts •••••••••••••••••••••••••••••• */

import { combineLatest, map, Observable, Subject } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { AlbumT } from './album.type';
import { HttpClient } from '@angular/common/http';

type Album_IdT = AlbumT['id'];

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsUrl: string = 'api/albums';

  private albumSelectedSubject$$: Subject<Album_IdT> = new Subject<Album_IdT>();

  private albumSelected$: Observable<Album_IdT> =
    this.albumSelectedSubject$$.asObservable();

  private http: HttpClient = inject(HttpClient);

  public readonly albums$: Observable<Array<AlbumT>> = this.http.get<
    Array<AlbumT>
  >(this.albumsUrl);

  public readonly albumDetail$: Observable<AlbumT> = combineLatest({
    albums: this.albums$,
    albumSelected: this.albumSelected$,
  }).pipe(
    map(
      ({
        albums,
        albumSelected,
      }: {
        albums: Array<AlbumT>;
        albumSelected: Album_IdT;
      }): AlbumT => {
        return albums.find(
          (album: AlbumT): boolean => album.id === albumSelected
        ) as AlbumT;
      }
    )
  );

  public selectAlbum(id: Album_IdT): void {
    this.albumSelectedSubject$$.next(id);
  }
}
