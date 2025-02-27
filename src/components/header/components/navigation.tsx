//import { Link } from 'react-router-dom';
//import { useContext } from 'react';
//import UserContext from '../layout/user-context';

const User = {
  favoriteCount: 34,
  userName: 'Oliver.conner@gmail.com',
}; // откуда получаем данные что бы подготовить компонент ?

// eslint-disable-next-line arrow-body-style
const Navigation = () :JSX.Element=> {
  return(
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{User.userName}</span>
            <span className="header__favorite-count">{User.favoriteCount}</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;


