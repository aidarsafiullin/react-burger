import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';
import { IngredientDetail } from 'src/utils/constants';

const IngredientDetails = ({ ingredient }) => {
  return (
    <>
      <img
        className="mb-4"
        width={480}
        height={240}
        src={ingredient.image_large}
        alt={ingredient.name}
      />
      <h3 className="text text_type_main-medium mb-8">{ingredient.name}</h3>
      <div className={`${styles.details} mb-15 text text_type_main-default text_color_inactive`}>
        {IngredientDetail.map((item) => (
          <div key={item.id} className={`${styles.detail} mr-5`}>
            <div className={styles.key}>{item.key}</div>
            <div className={styles.value}>{ingredient[item.value]}</div>
          </div>
        ))}
      </div>
    </>
  );
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired,
};

export default IngredientDetails;
