import { useState } from 'react';

import styles from './burger-ingredients.module.css';
import { IngredientTypes } from '../../utils/constants';
import IngredientsFilter from './ingredients-filter/ingredients-filter';
import IngredientsMenu from './ingredients-menu/ingredients-menu';
import PropTypes from 'prop-types';

const BurgerIngredients = ({ data }) => {
  const filter = Object.keys(IngredientTypes);
  const [activeIngredientType, setActiveIngredientType] = useState(filter[0]);

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <IngredientsFilter
        filter={filter}
        IngredientTypes={IngredientTypes}
        activeIngredientType={activeIngredientType}
        setActiveIngredientType={setActiveIngredientType}
      />
      <IngredientsMenu data={data} filter={filter} IngredientTypes={IngredientTypes} />
    </section>
  );
};

BurgerIngredients.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerIngredients;
