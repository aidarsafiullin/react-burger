import React from 'react';
import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { IngredientsContext, TotalPriceContext } from 'src/utils/contexts';
import { URL_INGREDIENTS } from '../../utils/constants';

const initialPrice = { price: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return { price: state.price + action.payload };
    case 'remove':
      return { price: state.price - action.payload };
    case 'reset':
      return initialPrice;
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
};

const AppMain = () => {
  const [ingredients, setIngredients] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  const [totalPrice, totalPriceDispatcher] = React.useReducer(reducer, initialPrice, undefined);

  React.useEffect(() => {
    const getIngredients = async () => {
      try {
        const response = await fetch(URL_INGREDIENTS);
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: статус ${response.status}`);
        }

        const actualData = await response.json();
        setIngredients(actualData.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setIngredients([]);
      } finally {
        setLoading(false);
      }
    };
    getIngredients();
  }, []);

  return (
    <main className={styles.main}>
      {loading && <div>Идет загрузка...</div>}
      {error && <div>{`Проблема с получением данных - ${error}`}</div>}
      {ingredients && (
        <>
          <IngredientsContext.Provider value={ingredients}>
            <BurgerIngredients />
            <TotalPriceContext.Provider value={{ totalPrice, totalPriceDispatcher }}>
              <BurgerConstructor />
            </TotalPriceContext.Provider>
          </IngredientsContext.Provider>
        </>
      )}
    </main>
  );
};

export default AppMain;
