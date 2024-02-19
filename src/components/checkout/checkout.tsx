import React from 'react';
import { FC } from 'react';
import { useDispatch, useSelector } from '../../hooks';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { checkoutOrder } from '../../services/actions/order';
import { fetchBurgerConstructor, getUser } from '../../services/selectors';
import styles from './checkout.module.css';
import { getCookie } from '../../utils/cookies';

type TTotalPrice = {
  totalPrice: number;
};

const Checkout: FC<TTotalPrice> = ({ totalPrice }) => {
  const user = useSelector(getUser);
  const { pathname } = useLocation();
  const refreshToken = getCookie('refreshToken');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bun, fillings } = useSelector(fetchBurgerConstructor);

  const handleCheckout = () => {
    const orderIngredients = [
      bun?.info?._id,
      ...(fillings || []).map((item: any) => item.info._id),
      bun?.info?._id,
    ];

    user || refreshToken
      ? dispatch(checkoutOrder(orderIngredients))
      : navigate('/login', { state: { prev: pathname } });
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

export default Checkout;
