import axios from 'axios';
import { cacheRequests } from '@features/cached-request';

const API_URL = '/directus/items';

export const fetchPhotos = cacheRequests(async ({ limit, page, albumId }) => {
  const response = await axios.get(`${API_URL}/photos`, {
    params: {
      'fields[]': ['id', 'image'],
      'filter[album][id][_eq]': albumId,
      page,
      limit,
    },
  });
  return response.data.data;
});
