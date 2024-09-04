import { makeAutoObservable, runInAction } from 'mobx';
import { fetchAlbums } from '../api';
import { Album } from './album';
import { toJS } from 'mobx';
class AlbumStore {
  albums = [];
  currentAlbum = null;
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

  async setCurrentAlbum(albumId) {
    let album = this.albums.find(({ id }) => id === +albumId);

    if (!album) {
      await this.loadAlbums();
      album = this.albums.find(({ id }) => id === +albumId);
    }

    runInAction(() => {
      this.currentAlbum = album || null;
    });
  }

  get albumId() {
    return this.currentAlbum?.id;
  }

  get albumTitle() {
    return this.currentAlbum?.title;
  }

  get albumCount() {
    return this.currentAlbum?.count;
  }
}

export const albumStore = new AlbumStore();
