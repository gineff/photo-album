import { makeAutoObservable, reaction, runInAction } from 'mobx';
import { fetchPhotos } from '../api';
import { toJS } from 'mobx';

class PhotoStore {
  limit = 6;
  page = null;
  albumId = null;
  photoId = null;
  photos = [];
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);

    reaction(
      () => ({ page: this.page, albumId: this.albumId }),
      (currentValues) => {
        this.loadPhotos(currentValues);
      }
    );
  }

  setParams({ albumId, photoId, page }) {
    this.albumId = albumId ?? null;
    this.photoId = photoId ?? null;
    this.page = page ?? null;
  }

  changePage(page) {
    runInAction(() => {
      this.page = page;
    });
  }

  async updatePhotos({ page, albumId }) {
    if (this.cache[`${albumId}-${page}`]) {
      runInAction(() => {
        this.photos = this.cache[page];
      });
    } else {
      await this.loadPhotos({ page, albumId });
    }
  }

  async loadPhotos({ page, albumId }) {
    this.loading = true;
    this.error = null;

    try {
      const fetchedPhotos = await fetchPhotos({
        page,
        limit: this.limit,
        albumId: albumId,
      });
      runInAction(() => {
        this.photos = fetchedPhotos;
      });
    } catch (error) {
      runInAction(() => {
        this.error = error;
        this.photos = [];
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  getPhotoById(photoId) {
    return this.photos.find(({ id }) => photoId == id);
  }
}

export const photoStore = new PhotoStore();
