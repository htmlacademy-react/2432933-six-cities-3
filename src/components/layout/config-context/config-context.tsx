import { createContext } from 'react';
import { PageConfig } from '../../../types/page-config/page-config';

const PageConfigContext = createContext < PageConfig > ({
  className    : '',
  isShown      : true,
  isActive     : false,
  isShowFooter : false,
});

export { PageConfigContext };
