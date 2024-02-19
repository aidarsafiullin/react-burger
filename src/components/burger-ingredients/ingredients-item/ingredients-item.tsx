import { FC } from 'react';
import styles from './ingredients-item.module.css';
import { useDrag } from 'react-dnd';
import { useNavigate, useLocation } from 'react-router-dom';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { TIngredientData, TIngredientInfo } from '../../../services/types/data';

type TIngredient = {
  data: TIngredientData;
};

const Ingredient: FC<TIngredient> = ({ data }) => {
  const { info, qty } = data;

  const navigate = useNavigate();
  const location = useLocation();
  const handleIngredientClick = (ingredient: TIngredientInfo) => {
    navigate(`/ingredients/${info._id}`, {
      state: { ingredient: ingredient, background: location },
    });
  };

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
      onClick={() => handleIngredientClick(info)}>
      {qty > 0 && <Counter count={qty} size="default" />}
      <img
        className={`${styles.ingredientImage} ml-4 mr-4 mb-1`}
        src={info.image}
        alt={info.name}></img>
      <div className={`${styles.ingredientPrice} mb-1 text text_type_main-default`}>
        <span className="mr-2 text text_type_digits-default">{info.price}</span>
        <CurrencyIcon type="primary" />
      </div>
      <p className={`${styles.ingredientName} text text_type_main-default`}>{info.name}</p>
    </li>
  );
};

export default Ingredient;
