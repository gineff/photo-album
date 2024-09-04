import { useSetPhotoPageParams } from '../lib/useSetPhotoPageParams';
import { PhotoList } from '@widgets/photo-list/ui/photo-list';
import { Breadcrumbs } from '@widgets/breadcrumbs';
import { PhotoModal } from '@features/photo-modal';

export const PhotosPage = () => {
  useSetPhotoPageParams();

  return (
    <>
      <Breadcrumbs />
      <PhotoList />
      <PhotoModal />
    </>
  );
};
