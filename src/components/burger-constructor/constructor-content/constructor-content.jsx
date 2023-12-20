import styles from './constructor-content.module.css';
import { DragIcon, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const ConstructorContent = ({ data }) => {
  return (
    <div className={`${styles['constructor-content']} mb-10`}>
      <ConstructorElement
        extraClass={styles['constructor-element-locked']}
        type="top"
        isLocked={true}
        text={'Краторная булка N-200i (верх)'}
        price={data[0].price}
        thumbnail={data[0].image}
      />
      <div className={`${styles['constructor-scroll-area']} pr-2`}>
        {data.map((item, index) => {
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
        price={data[0].price}
        thumbnail={data[0].image}
      />
    </div>
  );
};

ConstructorContent.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ConstructorContent;
