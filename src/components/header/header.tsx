import { useContext } from 'react';
import { PageConfigContext } from '../layout/config-context/config-context';
import Logo from './components/logo';
import Navigation from './components/navigation';

const Header = () :JSX.Element => {
  const { isShown, isActive } = useContext(PageConfigContext);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo isActive={ isActive } />
          { isShown && <Navigation /> }
        </div>
      </div>
    </header>
  );
};

export default Header;
