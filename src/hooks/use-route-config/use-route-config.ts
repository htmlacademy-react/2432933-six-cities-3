import { useLocation } from 'react-router-dom';
import { PageConfig } from '../../types/page-config/page-config';
import { AppRoute } from '../../components/const';
import { RequiredPageConfig } from '../../types/page-config/page-config';

const defaultConfig :RequiredPageConfig = {
  className: '',
  isShown: true,
  isActive: false,
  isShowFooter: false
};

const RouteConfig :Record<string, PageConfig> = {
  [AppRoute.Main]: {
    className : 'page--gray page--main',
    isActive  : true,
  },
  [AppRoute.Login]: {
    className : 'page--gray page--login',
    isShown   : false,
  },
  [AppRoute.Favorites]: {
    isShowFooter : true,
  },

};

const useRouteConfig = () => {
  const location = useLocation();
  const config = RouteConfig[location.pathname as AppRoute];

  return {...defaultConfig, ...config};
};

export { useRouteConfig };

