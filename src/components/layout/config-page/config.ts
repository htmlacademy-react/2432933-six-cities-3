import { useLocation } from 'react-router-dom';
import { PageConfig } from '../../../types/page-config/page-config';
import { AppRoute } from '../../const';

const defaultConfig :PageConfig = {
  className: '',
  isShown: true,
  isActive: false,
  isShowFooter: false
};


const pageConfiguration :Record<string, PageConfig> = {
  [AppRoute.Main]: {
    className     : 'page--gray page--main',
    isActive : true,
  },
  [AppRoute.Login]: {
    className     : 'page--gray page--login',
    isShown  : false,
  },
  [AppRoute.Favorites]: {
    isShowFooter : true,
  },

};

const usePageConfiguration = () :PageConfig => {
  const location = useLocation();
  const config = pageConfiguration[location.pathname as AppRoute];

  return { ...defaultConfig, ...config };
};

export {defaultConfig, pageConfiguration, usePageConfiguration};
