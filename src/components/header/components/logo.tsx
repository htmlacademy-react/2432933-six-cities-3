import { Link } from 'react-router-dom';

type LogoProps = {
  isActive ?: boolean;
}

const Logo = ({ isActive } :LogoProps) => (
  <div className="header__left">
    <Link className={`header__logo-link ${isActive ? 'header__logo-link--active' : ''}`} to="/">
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
    </Link>
  </div>
);

export default Logo;

