import Logo from './components/logo';
import Navigation from './components/navigation';
import { RequiredPageConfig } from '../../types/page-config/page-config';

type HeaderConfig = Pick<RequiredPageConfig, 'isShown' | 'isActive'>;

const Header = ({isShown, isActive} :HeaderConfig) =>
  //const {isShown, isActive} = config;
  (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo isActive={isActive}/>
          { isShown && <Navigation /> }
        </div>
      </div>
    </header>
  );

export default Header;
