import { useParams } from 'react-router-dom';
import { useSetPhotoPageParams } from '../lib/useSetPhotoPageParams';
import { PhotoList } from '@widgets/photo-list/ui/photo-list';
import { Breadcrumbs } from '@widgets/breadcrumbs';
import { PhotoCard } from '@widgets/photo-card/ui/photo-card';
import { PhotoModal } from '@features/photo-modal';
import { useIsTablet } from '../lib/use-is-tablet';

export const PhotosPage = () => {
  useSetPhotoPageParams();
  const isTablet = useIsTablet();
  const { photoIndex } = useParams();

  if (photoIndex && isTablet) {
    return <PhotoCard />;
  }

  return (
    <>
      <Breadcrumbs />
      <PhotoList />
      <PhotoModal />
    </>
  );
};
