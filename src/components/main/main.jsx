import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { URL_INGREDIENTS, fetchAllIngredients } from '../../utils/constants';
import { getIngredients } from '../../services/actions/ingredients';

const AppMain = () => {
  const dispatch = useDispatch();

  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(fetchAllIngredients);

  React.useEffect(() => {
    dispatch(getIngredients(URL_INGREDIENTS));
  }, [dispatch]);

  return (
    <>
      {ingredientsRequest && <div>Идет загрузка...</div>}
      {ingredientsFailed && <div>{`Проблема с получением данных - ${ingredientsFailed}`}</div>}
      {ingredients && (
        <main className={styles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </>
  );
};

export default AppMain;
