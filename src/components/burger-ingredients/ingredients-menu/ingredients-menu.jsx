import { useDispatch, useSelector } from 'react-redux';
import Ingredient from '../ingredients-item/ingredients-item';
import IngredientDetails from 'src/components/modal/ingredient-details/ingredient-details';
import Modal from 'src/components/modal/modal';
import styles from './ingredients-menu.module.css';
import { fetchSingleIngredient } from '../../../utils/constants';
import { closeIngredientDetails } from '../../../services/actions/ingredient-details';
import PropTypes from 'prop-types';

const IngredientsMenu = ({
  ingredients,
  ingredientTypeRefs,
  filter,
  IngredientTypes,
  onScroll,
}) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeIngredientDetails());
  };
  const { ingredient } = useSelector(fetchSingleIngredient);

  return (
    <>
      <section onScroll={onScroll} className={`${styles.section} pt-10`}>
        {filter.map((type, id) => {
          return (
            <div key={id} className={`${styles['ingredient-type']} mb-10`}>
              <h2 ref={ingredientTypeRefs[id]} className="text text_type_main-medium mb-6">
                {IngredientTypes[type]}
              </h2>
              <div className={`${styles['ingredient-type-wrapper']} pl-4 pr-4`}>
                {ingredients.map((item) => {
                  if (item.info.type === type) {
                    return <Ingredient key={item.info._id} data={item.info} />;
                  }
                })}
              </div>
            </div>
          );
        })}
      </section>
      {ingredient && (
        <Modal title={'Детали ингредиента'} closeModal={closeModal}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </>
  );
};

IngredientsMenu.propTypes = {
  filter: PropTypes.array.isRequired,
  IngredientTypes: PropTypes.object.isRequired,
  ingredients: PropTypes.array.isRequired,
};

export default IngredientsMenu;
