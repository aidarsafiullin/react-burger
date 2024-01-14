import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients-filter.module.css';
import PropTypes from 'prop-types';

const IngredientsFilter = ({
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
          onClick={setActiveIngredientType}>
          {IngredientTypes[tab]}
        </Tab>
      ))}
    </div>
  );
};

IngredientsFilter.propTypes = {
  filter: PropTypes.array.isRequired,
  filterRef: PropTypes.object.isRequired,
  IngredientTypes: PropTypes.object.isRequired,
  activeIngredientType: PropTypes.number.isRequired,
  setActiveIngredientType: PropTypes.func.isRequired,
};

export default IngredientsFilter;
