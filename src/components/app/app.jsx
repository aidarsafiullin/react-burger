import React from 'react';
import styles from './app.module.css';
import AppHeader from '../header/header';
import AppMain from '../main/main';

const App = () => {
  return (
    <div className={styles.app}>
      <AppHeader />
      <AppMain />
    </div>
  );
};

export default App;
