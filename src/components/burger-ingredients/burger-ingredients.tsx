import React, { useState, useRef, useEffect, createRef } from 'react';
import { useSelector } from '../../hooks';
import styles from './burger-ingredients.module.css';
import { IngredientTypes } from '../../utils/constants';
import IngredientsFilter from './ingredients-filter/ingredients-filter';
import IngredientsMenu from './ingredients-menu/ingredients-menu';
import { fetchAllIngredients } from '../../services/selectors';

type IngredientType = keyof typeof IngredientTypes;

type TdistanceAll = {
  [key: string]: number;
};

const BurgerIngredients: React.FC = () => {
  const { ingredients } = useSelector(fetchAllIngredients);

  const ingredientTypeKeys = Object.keys(IngredientTypes) as IngredientType[];
  const [activeIngredientTypeIndex, setActiveIngredientTypeIndex] = useState<number>(0);
  const [filterBottomPosition, setFilterBottomPosition] = useState<number | undefined>(undefined);
  const filterContainerRef = useRef<HTMLDivElement>(null);

  const ingredientTypeRefs = Array(ingredientTypeKeys.length)
    .fill(null)
    .map(() => createRef<HTMLDivElement>());

  useEffect(() => {
    if (filterContainerRef.current) {
      setFilterBottomPosition(filterContainerRef.current.getBoundingClientRect().bottom);
    }
  }, []);

  const handleScroll = () => {
    if (filterBottomPosition !== undefined) {
      const closestIngredientTypeIndex = ingredientTypeRefs.reduce(
        (minDistIndex, typeRef, index) => {
          if (typeRef.current) {
            const distance = Math.abs(
              filterBottomPosition - typeRef.current.getBoundingClientRect().top,
            );

            if (minDistIndex === null || distance < minDistIndex.distance) {
              return { index, distance };
            } else {
              return minDistIndex;
            }
          } else {
            return minDistIndex;
          }
        },
        null as { index: number; distance: number } | null,
      );

      if (closestIngredientTypeIndex) {
        setActiveIngredientTypeIndex(closestIngredientTypeIndex.index);
      }
    }
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
