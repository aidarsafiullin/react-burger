import React from 'react';
import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import data from '../../utils/data';

const AppMain = () => {
  return (
    <main className={styles.main}>
      <BurgerIngredients data={data} />
      <BurgerConstructor data={data} />
    </main>
  );
};

export default AppMain;
