import React from 'react';
import styles from './ingredients-item.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { useNavigate, useLocation } from 'react-router-dom';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ingredientPropTypes } from '../../../utils/types';

const Ingredient = ({ data }) => {
  /* const openIngredientDetailsModal = (ingredient) => {
    dispatch(openIngredientDetails(ingredient));
  };
 */
  const navigate = useNavigate();
  const location = useLocation();
  const handleIngredientClick = (ingredient) => {
    navigate(`/ingredients/${data._id}`, {
      state: { ingredient: ingredient, background: location },
    });
  };
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
    <li
      className={styles.ingredientItem}
      ref={dragRef}
      style={{ ...styles, opacity }}
      onClick={() => handleIngredientClick(data)}>
      {ingredientQuantity > 0 && (
        <Counter className="counter-card" count={ingredientQuantity} size="default" />
      )}
      <img
        className={`${styles.ingredientImage} ml-4 mr-4 mb-1`}
        src={data.image}
        alt={data.name}></img>
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
