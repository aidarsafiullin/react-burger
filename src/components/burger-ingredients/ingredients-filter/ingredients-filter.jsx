import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients-filter.module.css';

const IngredientsFilter = ({
  filter,
  IngredientTypes,
  activeIngredientType,
  setActiveIngredientType,
}) => {
  return (
    <div className={styles.filters}>
      {filter.map((tab, id) => (
        <Tab
          key={id}
          value={tab}
          active={activeIngredientType === tab}
          onClick={setActiveIngredientType}>
          {IngredientTypes[tab]}
        </Tab>
      ))}
    </div>
  );
};

export default IngredientsFilter;
