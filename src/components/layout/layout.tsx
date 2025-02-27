
import { Outlet } from 'react-router-dom';
import { usePageConfiguration } from './config-page/config';
import { PageConfigContext } from './config-context/config-context';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = () :JSX.Element => {
  const config = usePageConfiguration();

  return (
    <PageConfigContext.Provider value={config}>
      <div className={`page ${config.className}`}>
        <Header />
        <Outlet />
        {config.isShowFooter && <Footer />}
      </div>
    </PageConfigContext.Provider>
  );
};

export default Layout;
