import axios from 'axios';
import { cacheRequests } from '@features/cached-request';

const API_URL = '/directus/items/photos';

export const fetchAlbums = () =>
  cacheRequests(async () => {
    const response = await axios.get(`${API_URL}`, {
      params: {
        'aggregate[count]': '*',
        'groupBy[]': 'album',
      },
    });
    return response.data.data;
  })('fetchAlbums');

export const fetchAlbumDetails = (id) =>
  cacheRequests(async (id) => {
    const response = await axios.get(`${API_URL}`, {
      params: {
        limit: 1,
        'fields[]': ['image', 'album.title', 'album.id'],
        'filter[album][_eq]': id,
        'filter[status][_eq]': 'published',
      },
    });
    return response.data.data;
  })(id, 'fetchAlbumDetails');



//thumbnail: `http://localhost:8055/assets/${photo.photo}?fit=cover&width=292&height=192&quality=100`,
