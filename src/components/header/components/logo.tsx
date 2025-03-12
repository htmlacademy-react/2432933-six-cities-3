import { Link } from 'react-router-dom';
import { receivesClassName } from '../../../utils/receives-class-name';

type LogoProps = {
  isActive: boolean;
}

const Logo = ({isActive} :LogoProps) => {
  const isActiveValue = receivesClassName(isActive, 'header__logo-link--active');

  return (
    <div className="header__left">
      <Link className={`header__logo-link ${isActiveValue}`} to="/">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </div>
  );
};

export default Logo;

