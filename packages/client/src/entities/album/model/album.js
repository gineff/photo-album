import { makeAutoObservable, runInAction, autorun } from 'mobx';
import { fetchAlbumDetails } from '../api';
import { buildCoverUrl } from '../lib/buildCoverUrl';

export class Album {
  count = null;
  cover = '';
  title = '';

  constructor({ id, count }) {
    this.id = id;
    this.count = count;
    makeAutoObservable(this);

    autorun(() => {
      this.loadDetails();
    });
  }

  async loadDetails() {
    this.loading = true;
    this.error = null;

    try {
      const {
        image,
        album: { title },
      } = (await fetchAlbumDetails(this.id)).at(0);

      const cover = buildCoverUrl(image);

      runInAction(() => {
        [this.cover, this.title] = [cover, title];
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
