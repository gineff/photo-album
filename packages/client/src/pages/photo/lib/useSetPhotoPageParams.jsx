import { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { photoStore } from '@entities/photo/model/photo-store';

export const useSetPhotoPageParams = () => {
  const { albumId, photoId } = useParams();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);

  useEffect(() => {
    photoStore.setParams({ albumId, photoId, page });
  }, [albumId, photoId, page]);
};
