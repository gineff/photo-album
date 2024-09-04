import { useNavigate, useSearchParams } from 'react-router-dom';
import { useNavigateToCurrentAlbum } from '@shared/use-navigate-to-current-album';
import { photoStore } from '@entities/photo';
import { albumStore } from '@entities/album';

export const useNavigatePages = (currentPageIndex) => {
  const navigate = useNavigate();
  const { navigateToCurrentAlbum: navigateToAlbum } = useNavigateToCurrentAlbum();
  const { limit, page } = photoStore;
  const { albumCount: total, albumId } = albumStore;
  const [searchParams] = useSearchParams();

  // Функция для проверки, находится ли индекс страницы в допустимых границах
  const isValidPageIndex = (pageIndex) => pageIndex >= 0 && pageIndex < total;

  // Функция для вычисления границ текущей страницы
  const getPageBounds = () => ({
    firstPhotoIndexOnPage: limit * (page - 1),
    lastPhotoIndexOnPage: limit * page - 1,
  });

  // Основная функция навигации по индексу страницы
  const navigatePageByIndex = (pageIndex) => {
    if (!isValidPageIndex(pageIndex)) {
      return null;
    }

    const searchParamsCopy = new URLSearchParams(searchParams);
    const { firstPhotoIndexOnPage, lastPhotoIndexOnPage } = getPageBounds();

    if (pageIndex > lastPhotoIndexOnPage) {
      searchParamsCopy.set('page', (page + 1).toString());
    } else if (pageIndex < firstPhotoIndexOnPage) {
      searchParamsCopy.set('page', (page - 1).toString());
    }

    return () => {
      navigate(`/album/${albumId}/photo/${pageIndex}?${searchParamsCopy}`);
    };
  };

  // Навигация на предыдущую и следующую страницы
  const navigatePreviousPage = navigatePageByIndex(currentPageIndex - 1);
  const navigateNextPage = navigatePageByIndex(currentPageIndex + 1);

  return {
    navigateToAlbum,
    navigatePreviousPage,
    navigateNextPage,
  };
};
