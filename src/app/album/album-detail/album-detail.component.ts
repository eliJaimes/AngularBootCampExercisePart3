/* ••[1]••••••••••••••••••••••••• album-detail.component.ts •••••••••••••••••••••••••••••• */

import { ActivatedRoute, Params } from '@angular/router';
import { AfterViewInit, Component } from '@angular/core';
import { AlbumsService } from '../../app-data/albums/albums.service';
import { AlbumT } from '../../app-data/albums/album.type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-album-detail',
  styleUrl: './album-detail.component.scss',
  templateUrl: './album-detail.component.html',
})
export class AlbumDetailComponent implements AfterViewInit {
  protected readonly titleLabel: string = 'Album details';
  protected readonly loadingLabel: string = 'Loading album...';

  protected albumDetail$: Observable<AlbumT> = this.albumsService.albumDetail$;

  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly albumsService: AlbumsService
  ) {}

  public ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.albumsService.selectAlbum(Number(params['id']));
    });
  }
}
