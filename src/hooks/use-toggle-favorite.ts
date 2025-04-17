import { useAppSelector, useAppDispatch } from './use-app-redux/use-app-redux';
import { AppRoute } from '../components/const';
import { updateFavoriteStatus } from '../services/api-action/favorite-action';
import { redirectToRoute } from '../store/redirect-to-route';


const useToggleFavorite = (id: string, isFavorite: boolean) => {
  const isAuth = useAppSelector((state) => state.authStatus.isAuth);
  const dispatch = useAppDispatch();

  const handleFavoriteClick = () => {
    if (!isAuth) {
      return dispatch(redirectToRoute(AppRoute.Login));
    }

    dispatch(updateFavoriteStatus({offerId: id, isFavorite: !isFavorite}));
  };

  return handleFavoriteClick;
};

export { useToggleFavorite };

