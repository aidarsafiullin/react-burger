import React, { useEffect, useRef } from 'react';
import IngredientsItem from '../ingredients-item/ingredients-item';
import IngredientDetails from 'src/components/modal/ingredient-details/ingredient-details';
import Modal from 'src/components/modal/modal';
import { useModal } from 'src/components/hooks/useModal';
import styles from './ingredients-menu.module.css';
import { ingredientPropTypes } from '../../../utils/types';
import PropTypes from 'prop-types';

const IngredientsMenu = ({ ingredients, h2Refs, filter, IngredientTypes, onScroll }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [currentIngredient, setCurrentIngredient] = React.useState(ingredients[0]);

  const handleClickIngredients = (item) => {
    setCurrentIngredient(item);
    openModal();
  };

  return (
    <>
      <section onScroll={onScroll} className={`${styles.section} pt-10`}>
        {filter.map((type, id) => {
          return (
            <div key={id} className={`${styles['ingredient-type']} mb-10`}>
              <h2 ref={h2Refs[id]} className="text text_type_main-medium mb-6">
                {IngredientTypes[type]}
              </h2>
              <div className={`${styles['ingredient-type-wrapper']} pl-4 pr-4`}>
                {ingredients.map((item) => {
                  if (item.type === type) {
                    return (
                      <IngredientsItem
                        handleClickIngredients={handleClickIngredients}
                        key={item._id}
                        item={item}
                      />
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </section>
      {isModalOpen && (
        <Modal title={'Детали ингредиента'} isModalOpen={isModalOpen} closeModal={closeModal}>
          <IngredientDetails currentIngredient={currentIngredient} />
        </Modal>
      )}
    </>
  );
};

IngredientsMenu.propTypes = {
  filter: PropTypes.array.isRequired,
  IngredientTypes: PropTypes.object.isRequired,
  ingredients: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default IngredientsMenu;
