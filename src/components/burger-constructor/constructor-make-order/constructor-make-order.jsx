import React from 'react';
import styles from './constructor-make-order.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderDetails from 'src/components/modal/order-details/order-details';
import { useModal } from 'src/components/hooks/useModal';
import Modal from 'src/components/modal/modal';
import { IngredientsContext, TotalPriceContext } from 'src/utils/contexts';
import { URL_ORDERS } from '../../../utils/constants';

const ConstructorMakeOrder = () => {
  const ingredients = React.useContext(IngredientsContext);
  const { totalPrice, totalPriceDispatcher } = React.useContext(TotalPriceContext);
  const { isModalOpen, openModal, closeModal } = useModal();
  const [orderId, setOrderId] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const ingredientsId = ingredients.map((ingr) => ingr._id);
  // Локальное состояние для хранения кэшированных результатов
  const [cachedOrder, setCachedOrder] = React.useState(null);

  // Кэширование функции handleCreateOrder с использованием useCallback
  const handleCreateOrder = React.useCallback(async () => {
    // Если результат уже кэширован, используем его
    if (cachedOrder) {
      setOrderId(cachedOrder.order.number);
      setError(null);
      setLoading(false);
      openModal();
      return;
    }

    try {
      openModal();
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients: ingredientsId }),
      };

      const response = await fetch(URL_ORDERS, requestOptions);

      if (!response.ok) {
        throw new Error(`Ошибка HTTP: статус ${response.status}`);
      }

      const actualData = await response.json();
      setOrderId(actualData.order.number);
      setError(null);

      // Кэширование результата
      setCachedOrder(actualData);
    } catch (err) {
      setError(err.message);
      setOrderId(null);
    } finally {
      setLoading(false);
    }
  }, [ingredientsId, cachedOrder, openModal]);

  React.useEffect(() => {
    totalPriceDispatcher({ type: 'reset' });
    const bun = ingredients.find((item) => item.type === 'bun');
    const ingr = ingredients.filter((item) => item.type !== 'bun');
    totalPriceDispatcher({ type: 'add', payload: bun.price * 2 });
    ingr.map((item) => totalPriceDispatcher({ type: 'add', payload: item.price }));
  }, [ingredients, totalPriceDispatcher]);

  return (
    <>
      <div className={`${styles['make-order-wrapper']} mr-4 mb-10`}>
        <div className={`${styles['make-order-price']} mr-10`}>
          <span className="text text_type_digits-medium mr-2">{totalPrice.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={handleCreateOrder} htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        <OrderDetails orderId={orderId} error={error} loading={loading} />
      </Modal>
    </>
  );
};

export default ConstructorMakeOrder;
