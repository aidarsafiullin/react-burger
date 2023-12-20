import Modal from 'src/components/modal/modal';
import React from 'react';
import styles from './constructor-make-order.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from 'src/components/modal/order-details/order-details';

const ConstructorMakeOrder = ({ data }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <div className={`${styles['make-order-wrapper']} mr-4 mb-10`}>
        <div className={`${styles['make-order-price']} mr-10`}>
          <span className="text text_type_digits-medium mr-2">2000</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={() => setShowModal(true)} htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
      <Modal showModal={showModal} onClose={() => setShowModal(false)}>
        <OrderDetails />
      </Modal>
    </>
  );
};

export default ConstructorMakeOrder;
