import { useParams } from 'react-router-dom';
import { useSetPhotoPageParams } from '../lib/useSetPhotoPageParams';
import { PhotoList } from '@widgets/photo-list/ui/photo-list';
import { Breadcrumbs } from '@widgets/breadcrumbs';
import { PhotoCard } from '@widgets/photo-card/ui/photo-card';
import { PhotoModal } from '@features/photo-modal';
import { useIsMobile } from '../lib/use-is-mobile';

export const PhotosPage = () => {
  useSetPhotoPageParams();
  const isMobile = useIsMobile();
  const { photoIndex } = useParams();

  if (photoIndex && isMobile) {
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
