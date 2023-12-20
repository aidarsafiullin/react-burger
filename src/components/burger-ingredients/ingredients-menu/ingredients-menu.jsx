import React from 'react';
import IngredientsItem from '../ingredients-item/ingredients-item';
import IngredientDetails from 'src/components/modal/ingredient-details/ingredient-details';
import Modal from 'src/components/modal/modal';
import styles from './ingredients-menu.module.css';
import PropTypes from 'prop-types';

const IngredientsMenu = ({ data, filter, IngredientTypes }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [currentIngredient, setCurrentIngredient] = React.useState(data[0]);

  const handleClickIngredients = (item) => {
    setCurrentIngredient(item);
    setShowModal(true);
  };

  return (
    <>
      <section className={`${styles.section} mt-10`}>
        {filter.map((type, id) => {
          return (
            <div key={id} className={`${styles['ingredient-type']} mb-10`}>
              <h2 className="text text_type_main-medium mb-6">{IngredientTypes[type]}</h2>
              <div className={`${styles['ingredient-type-wrapper']} pl-4 pr-4`}>
                {data.map((item) => {
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
      <Modal title={'Детали ингредиента'} showModal={showModal} onClose={() => setShowModal(false)}>
        <IngredientDetails currentIngredient={currentIngredient} />
      </Modal>
    </>
  );
};

IngredientsMenu.propTypes = {
  filter: PropTypes.array.isRequired,
  IngredientTypes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
};

export default IngredientsMenu;
