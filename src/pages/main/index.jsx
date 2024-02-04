import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch, useSelector } from 'react-redux';
import styles from './main.module.css';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import { fetchAllIngredients } from '../../utils/constants';
import { getIngredients } from '../../services/actions/ingredients';

export const MainPage = () => {
  const dispatch = useDispatch();

  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(fetchAllIngredients);

  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      {ingredientsRequest && <div>Идет загрузка...</div>}
      {ingredientsFailed && <div>{`Проблема с получением данных - ${ingredientsFailed}`}</div>}
      {ingredients && (
        <main className={styles.constructor}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
    </>
  );
};
