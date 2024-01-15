import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { URL_ORDERS } from '../../utils/constants';
import { checkoutOrder } from '../../services/actions/order';
import { fetchBurgerConstructor } from '../../utils/constants';
import styles from './checkout.module.css';

const Checkout = ({ totalPrice }) => {
  const dispatch = useDispatch();
  const { bun, fillings } = useSelector(fetchBurgerConstructor);

  const handleCheckout = () => {
    const orderIngredients = [
      bun?.info?._id,
      ...(fillings || []).map((filling) => filling.info._id),
      bun?.info?._id,
    ];
    dispatch(checkoutOrder(URL_ORDERS, orderIngredients));
  };

  return (
    <div className={`${styles.container} pt-10 pb-3`}>
      <div className={`${styles.price} mr-10`}>
        <span className="mr-2 text text_type_digits-medium">{totalPrice}</span>
        <span className={styles.price__icon}>
          <CurrencyIcon type="primary" />
        </span>
      </div>
      <Button
        type="primary"
        size="large"
        htmlType="button"
        onClick={handleCheckout}
        disabled={!totalPrice}>
        Оформить заказ
      </Button>
    </div>
  );
};

Checkout.propTypes = {
  totalPrice: PropTypes.number.isRequired,
};

export default Checkout;
