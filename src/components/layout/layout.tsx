import { Outlet } from 'react-router-dom';
import { useRouteConfig } from '../../hooks/use-route-config/use-route-config';
import Footer from '../footer/footer';
import Header from '../header/header';

const Layout = () => {
  const {className, isShown, isActive, isShowFooter} = useRouteConfig();

  return (
    <div className={`page ${className}`}>
      <Header isShown={isShown} isActive={isActive}/> {/* лучше отдельные свйотва передавать
                                                      или передать объект и внтури Header деструктуризировать isShown isActive*/}
      <Outlet />
      {isShowFooter && <Footer />}
    </div>

  );
};

export default Layout;
