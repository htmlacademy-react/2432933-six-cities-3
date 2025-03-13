import LinkWrapper from '../../link-wrapper/link-wrapper';
import { receivesClassName } from '../../../utils/receives-class-name';

type LogoProps = {
  isActive: boolean;
}

const Logo = ({isActive} :LogoProps) => {
  const isActiveValue = receivesClassName(isActive, 'header__logo-link--active');

  return (
    <div className="header__left">
      <LinkWrapper className={`header__logo-link ${isActiveValue}`} link="/">
        <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
      </LinkWrapper>
    </div>
  );
};

export default Logo;

