import React from 'react';
import styles from './order-details.module.css';
import done from '../../../images/done-icon.png';

const OrderDetails = () => {
  return (
    <>
      <span className={`${styles.title} text text_type_digits-large mt-4 mb-8`}>034536</span>
      <h4 className="text text_type_main-medium mb-15">идентификатор заказа</h4>
      <img width={120} height={120} src={done} alt="done-icon" />
      <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
      <p className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </p>
    </>
  );
};

export default OrderDetails;
