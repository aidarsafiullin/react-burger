import React from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients-filter.module.css';

// Определение типов пропсов
interface IngredientsFilterProps {
  filter: string[];
  filterRef: React.RefObject<HTMLDivElement>;
  IngredientTypes: Record<string, string>;
  activeIngredientType: number;
  setActiveIngredientType: (index: number) => void;
}

// Функциональный компонент IngredientsFilter с типизацией
const IngredientsFilter: React.FC<IngredientsFilterProps> = ({
  filter,
  filterRef,
  IngredientTypes,
  activeIngredientType,
  setActiveIngredientType,
}) => {
  return (
    <div ref={filterRef} className={styles.filters}>
      {filter.map((tab, id) => (
        <Tab
          key={id}
          value={tab}
          active={activeIngredientType === id}
          onClick={() => setActiveIngredientType(id)}>
          {IngredientTypes[tab]}
        </Tab>
      ))}
    </div>
  );
};

export default IngredientsFilter;
