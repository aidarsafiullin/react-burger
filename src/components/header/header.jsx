import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';

const AppHeader = () => {
  const { pathname } = useLocation();

  const commonClassName = `ml-2 text text_type_main-default `;
  const activeClassName = 'text_color_primary';
  const inactiveClassName = 'text_color_inactive';

  return (
    <header className={styles.header}>
      <div className={`${styles.container} pb-3 pt-3`}>
        <nav className={styles.nav}>
          <NavLink to="/" className={`${styles['nav-item']} p-5`}>
            <BurgerIcon type={pathname === '/' ? 'primary' : 'secondary'} />
            <p
              className={`${
                commonClassName + (pathname === '/' ? activeClassName : inactiveClassName)
              } pl-2`}>
              Конструктор
            </p>
          </NavLink>
          <NavLink to="/orders" className={`${styles['nav-item']} p-5`}>
            <ListIcon type={pathname === '/orders' ? 'primary' : 'secondary'} />
            <span
              className={`${
                commonClassName + (pathname === '/orders' ? activeClassName : inactiveClassName)
              } pl-2`}>
              Лента заказов
            </span>
          </NavLink>
        </nav>
        <NavLink to="/">
          <div className={styles.logo}>
            <Logo />
          </div>
        </NavLink>
        <NavLink to="/profile" className={`${styles.profile} p-5`}>
          <ProfileIcon type={pathname === '/profile' ? 'primary' : 'secondary'} />
          <p
            className={
              commonClassName + (pathname === '/profile' ? activeClassName : inactiveClassName)
            }>
            Личный кабинет
          </p>
        </NavLink>
      </div>
    </header>
  );
};

export default AppHeader;
