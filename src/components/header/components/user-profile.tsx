import { Link } from 'react-router-dom';
import { logoutAction } from '../../../services/api-action/user-process-action/user-process.action';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';

const UserProfile = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.authStatus.user);
  const favorites = useAppSelector((state)=> state.favorites.favorites);


  const handleLogoutClick = () => {
    dispatch(logoutAction());
  };

  return (
    <>
      <li className="header__nav-item user">
        <Link className="header__nav-link header__nav-link--profile" to={'/favorites'}>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userProfile?.email}</span>
          <span className="header__favorite-count">{favorites.length}</span>
        </Link>
      </li>

      <li className="header__nav-item">
        <button
          className="header__nav-link"
          onClick={handleLogoutClick}
        >
          <span className="header__signout">Sign out</span>
        </button>
      </li>
    </>
  );
};

export default UserProfile;
