import styles from './order-details.module.css';
import done from '../../../images/done-icon.png';
import { useSelector } from 'react-redux';
import { fetchOrderDetails } from '../../../utils/constants';

const OrderDetails = () => {
  const { orderId, orderFailed } = useSelector(fetchOrderDetails);
  return (
    <div className={`${styles.order} pt-30 pr-25 pb-30 pl-25`}>
      {!orderFailed && !orderId && (
        <>
          <p className={`text text_type_main-large mb-8`}>Заказ оформляется</p>
          <p className={`text text text_type_main-default text_color_inactive`}>
            Ждите подтверждение
          </p>
        </>
      )}
      {orderId && (
        <>
          <span className={`${styles.title} text text_type_digits-large mb-8`}>{orderId}</span>
          <h4 className="text text_type_main-medium mb-15">идентификатор заказа</h4>
          <img width={120} height={120} src={done} alt="done-icon" />
          <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
          <p className="text text_type_main-default text_color_inactive ">
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
      {orderFailed && (
        <>
          <p className={`text text_type_main-large mb-8`}>Ошибка</p>
          <p className={`text text text_type_main-default text_color_inactive`}>
            Cвяжитесь с командным центром
          </p>
        </>
      )}
    </div>
  );
};

export default OrderDetails;
