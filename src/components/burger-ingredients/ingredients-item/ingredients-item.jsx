import React from 'react';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropTypes } from '../../../utils/types';
import PropTypes from 'prop-types';

import styles from './ingredients-item.module.css';

const IngredientsItem = ({ item, handleClickIngredients }) => {
  return (
    <div onClick={() => handleClickIngredients(item)} className={styles['ingredients-item']}>
      <Counter count={1} size="default" />
      <img height={120} width={240} src={item.image} alt={item.name} />
      <div className={`${styles['price-wrapper']} mt-2 mb-2`}>
        <span className="text text_type_digits-default">{item.price}</span>
        <CurrencyIcon type="primary" />
      </div>

      <h3 className="text text_type_main-default pb-6">{item.name}</h3>
    </div>
  );
};

IngredientsItem.propTypes = {
  item: ingredientPropTypes.isRequired,
  handleClickIngredients: PropTypes.func.isRequired,
};

export default IngredientsItem;
