import styles from './layout.module.css';
import AppHeader from '../header/header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <AppHeader />
      <main className={styles.layout}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
