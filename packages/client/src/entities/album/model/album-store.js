import { makeAutoObservable, runInAction } from 'mobx';
import { fetchAlbums } from '../api';
import { Album } from './album';

class AlbumStore {
  albums = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadAlbums() {
    this.loading = true;
    this.error = null;

    try {
      const fetchedAlbums = await fetchAlbums();

      runInAction(() => {
        this.albums = fetchedAlbums.map(({ album: id, count }) => new Album({ id, count }));
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }
}

export const albumStore = new AlbumStore();
