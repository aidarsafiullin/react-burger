import { NavLink } from 'react-router-dom';
import { FC, SyntheticEvent } from 'react';
import styles from './profile.module.css';

type TProfile = {
  description: string;
  onLogout: () => void;
};

const Profile: FC<TProfile> = ({ description, onLogout }) => {
  const inactiveClassName = 'text_color_inactive';
  const commonClassName = `${styles.link} text text_type_main-medium pt-4 pb-4 `;
  const activeClassName = 'text_color_primary';

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
          onClick={onLogout}>
          Выход
        </NavLink>
      </nav>
      <p className="text text_type_main-default text_color_inactive pt-20">{description}</p>
    </div>
  );
};

export default Profile;
