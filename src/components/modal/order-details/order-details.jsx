import React from 'react';
import styles from './order-details.module.css';
import done from '../../../images/done-icon.png';

const OrderDetails = ({ orderId, loading, error }) => {
  return (
    <>
      {loading && <div>Идет загрузка...</div>}
      {error && <div>{`Проблема с получением данных - ${error}`}</div>}
      {orderId && (
        <>
          <span className={`${styles.title} text text_type_digits-large mt-4 mb-8`}>{orderId}</span>
          <h4 className="text text_type_main-medium mb-15">идентификатор заказа</h4>
          <img width={120} height={120} src={done} alt="done-icon" />
          <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive mb-30">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </>
  );
};

export default OrderDetails;
