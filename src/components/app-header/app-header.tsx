import React from 'react';
import { NavLink, useLocation, matchPath } from 'react-router-dom';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

const AppHeader = () => {
  // Получение текущего пути из react-router
  const { pathname } = useLocation();

  // Определение активности разделов меню
  const isProfileActive =
    matchPath({ path: 'profile' }, pathname) ||
    matchPath({ path: 'profile/orders' }, pathname) ||
    matchPath({ path: 'profile/orders/:id' }, pathname);

  const isFeedActive =
    matchPath({ path: 'feed' }, pathname) || matchPath({ path: 'feed/:id' }, pathname);

  const isHomeActive = matchPath({ path: '/' }, pathname);

  // Общие стили для текста и ссылок
  const commonTextClassName = `ml-2 text text_type_main-default `;
  const commonLinkClassName = `pt-4 pr-5 pb-4 pl-5 mr-2 ${styles.header__item} `;
  const activeClassName = 'text_color_primary';
  const inactiveClassName = 'text_color_inactive';

  return (
    <header className={`pt-4 pb-4 ${styles.header}`}>
      <nav className={styles.menu}>
        <div className={styles.menu_section_left}>
          {/* Ссылка на конструктор */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              commonLinkClassName + (isActive ? activeClassName : inactiveClassName)
            }>
            <BurgerIcon type={isHomeActive ? 'primary' : 'secondary'} />
            <span className={commonTextClassName}>Конструктор</span>
          </NavLink>

          {/* Ссылка на ленту заказов */}
          <NavLink
            to="/feed"
            className={({ isActive }) =>
              commonLinkClassName + (isActive ? activeClassName : inactiveClassName)
            }>
            <ListIcon type={isFeedActive ? 'primary' : 'secondary'} />
            <span className={commonTextClassName}>Лента заказов</span>
          </NavLink>
        </div>

        <div className={styles.header__logo}>
          {/* Логотип */}
          <Logo />
        </div>

        {/* Ссылка на личный кабинет */}
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            commonLinkClassName +
            `${styles.menu_section_right} ` +
            (isActive ? activeClassName : inactiveClassName)
          }>
          <ProfileIcon type={isProfileActive ? 'primary' : 'secondary'} />
          <span className={commonTextClassName}>Личный кабинет</span>
        </NavLink>
      </nav>
    </header>
  );
};

export default AppHeader;
