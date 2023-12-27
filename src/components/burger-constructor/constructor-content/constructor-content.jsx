import React from 'react';
import styles from './constructor-content.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsContext } from 'src/utils/contexts';

const ConstructorContent = () => {
  const ingredients = React.useContext(IngredientsContext);

  return (
    <div className={`${styles['constructor-content']} mb-10`}>
      <ConstructorElement
        extraClass={styles['constructor-element-locked']}
        type="top"
        isLocked={true}
        text={'Краторная булка N-200i (верх)'}
        price={ingredients[0].price}
        thumbnail={ingredients[0].image}
      />
      <div className={`${styles['constructor-scroll-area']} pr-2`}>
        {ingredients.map((item, index) => {
          if (item.type !== 'bun') {
            return (
              <div key={item._id} className={styles['constructor-element-wrapper']}>
                <DragIcon type="primary" />
                <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
              </div>
            );
          }
        })}
      </div>
      <ConstructorElement
        extraClass={styles['constructor-element-locked']}
        type="bottom"
        isLocked={true}
        text={'Краторная булка N-200i (низ)'}
        price={ingredients[0].price}
        thumbnail={ingredients[0].image}
      />
    </div>
  );
};

export default ConstructorContent;
