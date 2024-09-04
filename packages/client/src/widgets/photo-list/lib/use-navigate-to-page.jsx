import { useSearchParams } from 'react-router-dom';
import { photoStore } from '@/entities/photo';

export const useNavigateToPage = (page) => {
  const [searchParams, setSearchParams] = useSearchParams();
  if(page == 1) {
    setSearchParams(searchParams.delete('page'));
  }else {
    setSearchParams(searchParams.set('page', page));
  }
  photoStore.changePage(page);
};
