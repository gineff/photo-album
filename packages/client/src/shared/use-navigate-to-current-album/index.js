import { useParams, useNavigate, useSearchParams } from 'react-router-dom';

export const useNavigateToCurrentAlbum = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { albumId } = useParams();

  return { navigateToCurrentAlbum: () => navigate(`/album/${albumId}?${searchParams}`) };
};
