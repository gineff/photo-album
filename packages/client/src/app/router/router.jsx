import { Route, Routes } from 'react-router-dom';
import { BaseLayout } from '@/shared/base-layout';
import { AlbumsPage } from '../../pages/album';
import { PhotosPage } from '../../pages/photo';
import { CurrentAlbum } from './current-album';

export const Router = () => (
  <Routes>
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<AlbumsPage />} />

      {/* Маршруты для альбомов */}
      <Route path="album">
        <Route index element={<AlbumsPage />} />
        <Route path=":albumId" element={<CurrentAlbum />}>
          <Route index element={<PhotosPage />} />
          <Route path="photo/:photoId" element={<PhotosPage />} />
        </Route>
      </Route>

      {/* Маршруты для фотографий */}
      <Route path="photo">
        <Route index element={<PhotosPage />} />
        <Route path=":photoId" element={<PhotosPage />} />
      </Route>
    </Route>
  </Routes>
);
