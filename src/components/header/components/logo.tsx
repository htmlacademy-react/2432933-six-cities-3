import { Link } from 'react-router-dom';

type LogoProps = {
  isActive : boolean;
}

const Logo = ({isActive} :LogoProps) => {
  const isActiveValue = isActive ? 'header__logo-link--active' : '';
  return (
    <div className="header__left">
      <Link className={`header__logo-link ${isActiveValue}`} to="/">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </Link>
    </div>
  );
};

export default Logo;

