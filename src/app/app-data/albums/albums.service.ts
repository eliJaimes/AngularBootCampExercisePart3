/* ••[1]••••••••••••••••••••••••• albums.service.ts •••••••••••••••••••••••••••••• */

import { inject, Injectable } from '@angular/core';
import { AlbumT } from './album.type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  private albumsUrl: string = 'api/albums';

  private http: HttpClient = inject(HttpClient);

  public readonly albums$: Observable<Array<AlbumT>> = this.http.get<
    Array<AlbumT>
  >(this.albumsUrl);
}
