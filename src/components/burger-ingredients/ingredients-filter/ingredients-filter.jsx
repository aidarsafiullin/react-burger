import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './ingredients-filter.module.css';
import PropTypes from 'prop-types';

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

IngredientsFilter.propTypes = {
  filter: PropTypes.array.isRequired,
  IngredientTypes: PropTypes.object.isRequired,
  activeIngredientType: PropTypes.string.isRequired,
  setActiveIngredientType: PropTypes.func.isRequired,
};

export default IngredientsFilter;
