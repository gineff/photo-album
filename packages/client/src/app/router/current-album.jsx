import { useParams } from 'react-router-dom';
import { albumStore } from '@entities/album';
import { Outlet } from 'react-router-dom';

export const CurrentAlbum = () => {
  const { albumId } = useParams();

  if (albumId) {
    albumStore.setCurrentAlbum(albumId);
  }

  return <Outlet />;
};
