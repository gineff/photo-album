import { Pagination } from '@mui/material';
import { albumStore } from '@entities/album';
import { photoStore } from '@/entities/photo';
import { observer } from 'mobx-react';

export const PhotoPagination = observer(() => {
  const { albumCount } = albumStore;
  const { limit } = photoStore;

  const handlePageChange = (e, page) => {
    photoStore.changePage(page);
  };
  const count = Math.ceil(albumCount / limit) || 1;

  return <Pagination count={count} shape="rounded" onChange={handlePageChange} />;
});
