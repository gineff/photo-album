import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from '@/shared/loader';

/**
 * Провайдер оборачивает приложение в BrowserRouter с Suspense.
 * Во время ленивой подгрузки чанка может появиться лоадер.
 * */

export const withRouter = (Component) => {
  const WrappedComponent = (props) => (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    </BrowserRouter>
  );

  // Устанавливаем displayName для облегчения отладки
  WrappedComponent.displayName = `withRouter(${Component.displayName || Component.name || 'Component'})`;

  return WrappedComponent;
};
