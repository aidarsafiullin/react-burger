import React from 'react';
import styles from './ingredients-item.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropTypes } from '../../../utils/types';
import { openIngredientDetails } from '../../../services/actions/ingredient-details';

const Ingredient = ({ data }) => {
  const openIngredientDetailsModal = (ingredient) => {
    dispatch(openIngredientDetails(ingredient));
  };

  const dispatch = useDispatch();
  const getIngredientQuantity = (store) =>
    store.ingredients.ingredients.find((item) => item.info._id === data._id).qty;

  const ingredientQuantity = useSelector(getIngredientQuantity);

  const [{ opacity }, dragRef] = useDrag({
    type: 'ingredient',
    item: { ...data },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <li className={styles.ingredientItem} ref={dragRef} style={{ ...styles, opacity }}>
      {ingredientQuantity > 0 && (
        <Counter className="counter-card" count={ingredientQuantity} size="default" />
      )}
      <img
        className={`${styles.ingredientImage} ml-4 mr-4 mb-1`}
        src={data.image}
        alt={data.name}
        onClick={() => openIngredientDetailsModal(data)}></img>
      <div className={`${styles.ingredientPrice} mb-1 text text_type_main-default`}>
        <span className="mr-2 text text_type_digits-default">{data.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.ingredientName} text text_type_main-default`}>{data.name}</p>
    </li>
  );
};

Ingredient.propTypes = {
  data: ingredientPropTypes.isRequired,
};

export default Ingredient;
