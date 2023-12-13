import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './header.module.css';

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} pb-4 pt-4`}>
        <nav className={styles.nav}>
          <div className={`${styles['nav-item']} p-5`}>
            <BurgerIcon type="primary" />
            <p className="text text_type_main-default pl-2">Конструктор</p>
          </div>
          <div className={`${styles['nav-item']} p-5`}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default pl-2">Лента заказов</p>
          </div>
        </nav>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={`${styles.profile} p-5`}>
          <ProfileIcon type="secondary" />
          <p className="text text_type_main-default pl-2">Личный кабинет</p>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
