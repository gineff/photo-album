import { Provider } from 'mobx-react';
import { photoStore } from '@/entities/photo';
import { albumStore } from '@/entities/album';

export const withStore = (Component) => {
  const WrappedComponent = (props) => (
    <Provider photoStore={photoStore} albumStore={albumStore}>
      <Component {...props} />
    </Provider>
  );

  // Устанавливаем displayName для облегчения отладки
  WrappedComponent.displayName = `withStore(${
    Component.displayName || Component.name || 'Component'
  })`;

  return WrappedComponent;
};
