import SignIn from './sign-in';
import UserProfile from './user-profile';
import { useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';

const Navigation = () => {
  const isAuth = useAppSelector((state) => state.authStatus.isAuth);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        { isAuth ? <UserProfile /> : <SignIn /> }
      </ul>
    </nav>
  );
};

export default Navigation;


