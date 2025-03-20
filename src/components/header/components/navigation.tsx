import SignIn from './sign-in';
import UserProfile from './user-profile';
import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import { AuthorizationStatus } from '../../const';

const Navigation = () => {
  const authStatus = useAppSelector((state) => state.authStatus.authStatus);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        { authStatus === AuthorizationStatus.Auth ? <UserProfile /> : <SignIn /> }
      </ul>
    </nav>
  );
};

export default Navigation;


