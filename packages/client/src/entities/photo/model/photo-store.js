import { makeAutoObservable, reaction, runInAction } from 'mobx';
import { fetchPhotos } from '../api';
import { toJS } from 'mobx';

class PhotoStore {
  limit = 6;
  page = null;
  albumId = null;
  photoIndex = null;
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

  setParams({ albumId, photoIndex, page }) {
    this.albumId = albumId ?? null;
    this.photoIndex = photoIndex ?? null;
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
        this.photos = fetchedPhotos.map((photo, i) => ({
          ...photo,
          index: (this.page - 1) * this.limit + i,
        }));
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
  getPhotoByIndex(photoIndex) {
    return this.photos.find(({ index }) => photoIndex == index);
  }
  getPhotoById(photoId) {
    return this.photos.find(({ id }) => photoId == id);
  }
}

export const photoStore = new PhotoStore();
