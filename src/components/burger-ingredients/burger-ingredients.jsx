import { useState, useContext, useRef, useEffect, createRef } from 'react';

import styles from './burger-ingredients.module.css';
import { IngredientTypes } from '../../utils/constants';
import IngredientsFilter from './ingredients-filter/ingredients-filter';
import IngredientsMenu from './ingredients-menu/ingredients-menu';
import { IngredientsContext } from 'src/utils/contexts';

const BurgerIngredients = () => {
  const filter = Object.keys(IngredientTypes);
  const [activeIngredientType, setActiveIngredientType] = useState(0);
  const [filterBottom, setFilterBottom] = useState();
  const ingredients = useContext(IngredientsContext);
  const filterRef = useRef(null);

  const h2Refs = Array(filter.length)
    .fill(null)
    .map(() => createRef());

  useEffect(() => {
    setFilterBottom(filterRef.current.getBoundingClientRect().bottom);
  }, []);

  const handleScroll = () => {
    const smallestDistId = h2Refs.reduce((minDistId, h2, id) => {
      const dist = Math.abs(filterBottom - h2.current.getBoundingClientRect().top);

      if (minDistId === null || dist < minDistId.dist) {
        return { id, dist };
      } else {
        return minDistId;
      }
    }, null);

    setActiveIngredientType(smallestDistId.id);
  };

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <IngredientsFilter
        filter={filter}
        filterRef={filterRef}
        IngredientTypes={IngredientTypes}
        activeIngredientType={activeIngredientType}
        setActiveIngredientType={setActiveIngredientType}
      />
      <IngredientsMenu
        ingredients={ingredients}
        filter={filter}
        h2Refs={h2Refs}
        onScroll={handleScroll}
        IngredientTypes={IngredientTypes}
      />
    </section>
  );
};

export default BurgerIngredients;
