/* ••[1]••••••••••••••••••••••••• app-data.ts •••••••••••••••••••••••••••••• */

import { AlbumData } from './albums/album.data';
import { AlbumT } from './albums/album.type';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { UserData } from './users/user.data';
import { UserT } from './users/user.type';

export class AppData implements InMemoryDbService {
  public createDb(): { albums: Array<AlbumT>; users: Array<UserT> } {
    const albums: Array<AlbumT> = AlbumData.albums;
    const users: Array<UserT> = UserData.users;

    return { albums, users };
  }
}
