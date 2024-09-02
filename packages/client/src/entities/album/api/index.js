import axios from 'axios';

const API_URL = '/directus/items';

export const fetchAlbums = async () => {
  const response = await axios.get(`${API_URL}/photos?aggregate[count]=*&groupBy[]=album`);
  return response.data.data;
};

export const fetchAlbumDetails = async (id) => {
  const response = await axios.get(
    `${API_URL}/photos?fields[]=image&fields[]=album.title&fields[]=album.id&limit=1&filter[album][_eq]=${id}&filter[status][_eq]=published`
  );
  return response.data.data;
};

//thumbnail: `http://localhost:8055/assets/${photo.photo}?fit=cover&width=292&height=192&quality=100`,
