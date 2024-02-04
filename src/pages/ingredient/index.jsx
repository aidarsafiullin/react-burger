import IngredientDetails from '../../components/modal/ingredient-details/ingredient-details';
import styles from './ingredient.module.css';

export const IngredientPage = () => {
  return (
    <div className={`pt-30 ${styles.wrapper}`}>
      <IngredientDetails />
    </div>
  );
};
