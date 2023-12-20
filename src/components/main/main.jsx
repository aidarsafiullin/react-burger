import React from 'react';
import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { URL } from '../../utils/constants';

const AppMain = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: статус ${response.status}`);
        }

        let actualData = await response.json();
        setData(actualData.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <main className={styles.main}>
      {!loading && (
        <>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </>
      )}
    </main>
  );
};

export default AppMain;
