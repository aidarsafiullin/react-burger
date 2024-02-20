import React from 'react';

import Ingredient from '../ingredients-item/ingredients-item';
import { TIngredientData } from '../../../services/types/data';
import styles from './ingredients-menu.module.css';

// Определение типов пропсов
type IngredientsMenuProps = {
  ingredients: TIngredientData[];
  ingredientTypeRefs?: Array<React.RefObject<HTMLHeadingElement>>;
  filter: Array<string>;
  IngredientTypes: Record<string, string>;
  onScroll?: () => void;
};

// Функциональный компонент IngredientsMenu с типизацией
const IngredientsMenu: React.FC<IngredientsMenuProps> = ({
  ingredients,
  ingredientTypeRefs,
  filter,
  IngredientTypes,
  onScroll,
}) => {
  return (
    <>
      {/* Секция с обработчиком прокрутки */}
      <section onScroll={onScroll} className={`${styles.section} pt-10`}>
        {/* Маппинг по фильтру */}
        {filter.map((type, id) => {
          return (
            <div key={id} className={`${styles['ingredient-type']} mb-10`}>
              {/* Заголовок с использованием рефа */}
              <h2
                ref={ingredientTypeRefs && ingredientTypeRefs[id]}
                className="text text_type_main-medium mb-6">
                {/* Название типа из объекта IngredientTypes */}
                {IngredientTypes[type]}
              </h2>
              {/* Обертка для ингредиентов */}
              <div className={`${styles['ingredient-type-wrapper']} pl-4 pr-4`}>
                {/* Маппинг по ингредиентам и отображение компонента Ingredient */}
                {ingredients.map((item) => {
                  if (item.info.type === type) {
                    return <Ingredient key={item.info._id} data={item} />;
                  }
                  return null; // Добавлено, чтобы избежать предупреждения об отсутствии return
                })}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default IngredientsMenu;
