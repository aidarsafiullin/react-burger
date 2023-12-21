import React from 'react';
import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { URL } from '../../utils/constants';

const AppMain = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: статус ${response.status}`);
        }

        const actualData = await response.json();
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
      {loading && <div>Идет загрузка...</div>}
      {error && <div>{`Проблема с получением данных - ${error}`}</div>}
      {data && (
        <>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </>
      )}
    </main>
  );
};

export default AppMain;
