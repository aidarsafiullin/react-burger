import { useState, useContext } from 'react';

import styles from './burger-ingredients.module.css';
import { IngredientTypes } from '../../utils/constants';
import IngredientsFilter from './ingredients-filter/ingredients-filter';
import IngredientsMenu from './ingredients-menu/ingredients-menu';
import { IngredientsContext } from 'src/utils/contexts';

const BurgerIngredients = () => {
  const filter = Object.keys(IngredientTypes);
  const [activeIngredientType, setActiveIngredientType] = useState(filter[0]);
  const ingredients = useContext(IngredientsContext);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <IngredientsFilter
        filter={filter}
        IngredientTypes={IngredientTypes}
        activeIngredientType={activeIngredientType}
        setActiveIngredientType={setActiveIngredientType}
      />
      <IngredientsMenu
        ingredients={ingredients}
        filter={filter}
        IngredientTypes={IngredientTypes}
      />
    </section>
  );
};

export default BurgerIngredients;
