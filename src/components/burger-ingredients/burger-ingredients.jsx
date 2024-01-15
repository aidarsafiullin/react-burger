import React, { useState, useRef, useEffect, createRef } from 'react';
import { useSelector } from 'react-redux';
import styles from './burger-ingredients.module.css';
import { IngredientTypes } from '../../utils/constants';
import IngredientsFilter from './ingredients-filter/ingredients-filter';
import IngredientsMenu from './ingredients-menu/ingredients-menu';
import { fetchAllIngredients } from '../../utils/constants';

const BurgerIngredients = () => {
  const { ingredients } = useSelector(fetchAllIngredients);

  const ingredientTypeKeys = Object.keys(IngredientTypes);
  const [activeIngredientTypeIndex, setActiveIngredientTypeIndex] = useState(0);
  const [filterBottomPosition, setFilterBottomPosition] = useState();
  const filterContainerRef = useRef(null);

  const ingredientTypeRefs = Array(ingredientTypeKeys.length)
    .fill(null)
    .map(() => createRef());

  useEffect(() => {
    setFilterBottomPosition(filterContainerRef.current.getBoundingClientRect().bottom);
  }, []);

  const handleScroll = () => {
    const closestIngredientTypeIndex = ingredientTypeRefs.reduce((minDistIndex, typeRef, index) => {
      const distance = Math.abs(filterBottomPosition - typeRef.current.getBoundingClientRect().top);

      if (minDistIndex === null || distance < minDistIndex.distance) {
        return { index, distance };
      } else {
        return minDistIndex;
      }
    }, null);

    setActiveIngredientTypeIndex(closestIngredientTypeIndex.index);
  };

  return (
    <section className={styles.section}>
      <h1 className="text text_type_main-large pt-10 pb-5">Соберите бургер</h1>
      <IngredientsFilter
        filter={ingredientTypeKeys}
        filterRef={filterContainerRef}
        IngredientTypes={IngredientTypes}
        activeIngredientType={activeIngredientTypeIndex}
        setActiveIngredientType={setActiveIngredientTypeIndex}
      />
      <IngredientsMenu
        ingredients={ingredients}
        filter={ingredientTypeKeys}
        ingredientTypeRefs={ingredientTypeRefs}
        onScroll={handleScroll}
        IngredientTypes={IngredientTypes}
      />
    </section>
  );
};

export default BurgerIngredients;
