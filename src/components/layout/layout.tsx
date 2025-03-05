import { Outlet } from 'react-router-dom';
import { useRouteConfig } from '../../hooks/use-route-config/use-route-config';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = () => {
  const {className, isShowFooter} = useRouteConfig();

  return (
    <div className={`page ${className}`}>
      <Header />
      <Outlet />
      {isShowFooter && <Footer />}
    </div>

  );
};

export default Layout;
