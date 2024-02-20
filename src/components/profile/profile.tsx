import { NavLink } from 'react-router-dom';
import { useDispatch } from '../../hooks';
import { logoutUser } from '../../services/actions/auth';
import { getCookie } from '../../utils/cookies';
import { FC, SyntheticEvent } from 'react';
import styles from './profile.module.css';

type TProfile = {
  description: string;
};

const Profile: FC<TProfile> = ({ description }) => {
  const dispatch = useDispatch();
  const refreshToken = getCookie('refreshToken')!;

  const inactiveClassName = 'text_color_inactive';
  const commonClassName = `${styles.link} text text_type_main-medium pt-4 pb-4 `;
  const activeClassName = 'text_color_primary';

  const handleLogout = (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(logoutUser(refreshToken));
  };

  return (
    <div className={`${styles.container} ml-5 mr-15`}>
      <nav className={`${styles.nav}`}>
        <NavLink
          className={({ isActive }) =>
            commonClassName + (isActive ? activeClassName : inactiveClassName)
          }
          to="/profile"
          end>
          Профиль
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            commonClassName + (isActive ? activeClassName : inactiveClassName)
          }
          to="/profile/orders">
          История заказов
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            commonClassName + (isActive ? activeClassName : inactiveClassName)
          }
          to="/login"
          onClick={handleLogout}>
          Выход
        </NavLink>
      </nav>
      <p className="text text_type_main-default text_color_inactive pt-20">{description}</p>
    </div>
  );
};

export default Profile;
