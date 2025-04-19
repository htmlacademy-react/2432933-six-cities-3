import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from './use-app-redux/use-app-redux';
import { AppRoute } from '../components/const';
import { updateFavoriteStatus } from '../services/api-action/favorites-action/favorite-action';


const useToggleFavorite = (id: string, isFavorite: boolean) => {
  const isAuth = useAppSelector((state) => state.authStatus.isAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    if (!isAuth) {
      return navigate(AppRoute.Login);
    }

    dispatch(updateFavoriteStatus({offerId: id, isFavorite: !isFavorite}));
  };

  return handleFavoriteClick;
};

export { useToggleFavorite};

