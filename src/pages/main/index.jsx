import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useSelector } from 'react-redux';
import styles from './main.module.css';
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients';
import BurgerConstructor from '../../components/burger-constructor/burger-constructor';
import { fetchAllIngredients } from '../../services/selectors';

export const MainPage = () => {
  const { ingredients, ingredientsRequest, ingredientsFailed } = useSelector(fetchAllIngredients);

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
