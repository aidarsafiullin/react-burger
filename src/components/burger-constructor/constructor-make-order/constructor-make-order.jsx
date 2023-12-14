import styles from './constructor-make-order.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorMakeOrder = ({ data }) => {
  return (
    <div className={`${styles['make-order-wrapper']} mr-4 mb-10`}>
      <div className={`${styles['make-order-price']} mr-10`}>
        <span className="text text_type_digits-medium mr-2">2000</span>
        <CurrencyIcon type="primary" />
      </div>
      <Button htmlType="button" type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
};

export default ConstructorMakeOrder;
