import axios from 'axios';

const API_URL = '/directus/items/photos';

export const fetchAlbums = async () => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      'aggregate[count]': '*',
      'groupBy[]': 'album',
    },
  });
  return response.data.data;
};

export const fetchAlbumDetails = (id) => async (id) => {
  const response = await axios.get(`${API_URL}`, {
    params: {
      limit: 1,
      'fields[]': ['image', 'album.title', 'album.id'],
      'filter[album][_eq]': id,
      'filter[status][_eq]': 'published',
    },
  });
  return response.data.data;
};
