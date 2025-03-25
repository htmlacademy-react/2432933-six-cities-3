import { Link } from 'react-router-dom';
import { logoutAction } from '../../../services/api-actions';
import { useAppDispatch, useAppSelector } from '../../../hooks/use-app-redux/use-app-redux';
import { MouseEvent } from 'react';


const UserProfile = () => {
  const dispatch = useAppDispatch();
  const userProfile = useAppSelector((state) => state.authStatus.user);
  const favorites = useAppSelector((state)=> state.favorites.favorites);


  const handleLogoutClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
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
        <Link className="header__nav-link" to="#" onClick={handleLogoutClick}>
          <span className="header__signout">Sign out</span>
        </Link>
      </li>
    </>
  );
};

export default UserProfile;
