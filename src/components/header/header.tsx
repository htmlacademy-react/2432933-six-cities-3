import Logo from './components/logo';
import Navigation from './components/navigation';
//import { RequiredPageConfig } from '../../types/page-config/page-config';
import { useRouteConfig } from '../../hooks/use-route-config/use-route-config';


const Header = () => {
  const {isShown, isActive} = useRouteConfig();
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo isActive={isActive}/>
          { isShown && <Navigation /> }
        </div>
      </div>
    </header>
  );
};

export default Header;
