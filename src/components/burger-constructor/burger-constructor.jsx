import { useMemo } from 'react';
import { useDrop } from 'react-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import Checkout from '../checkout/checkout';
import OrderDetails from 'src/components/modal/order-details/order-details';
import ConstructorIngredient from '../burger-constructor/constructor-content/constructor-content';
import { addIngredient, resetOrderIngredients } from '../../services/actions/burger-constructor';
import { closeOrder } from '../../services/actions/order';
import { increaseCount, setCount } from '../../services/actions/ingredients';
import {
  fetchAllIngredients,
  fetchBurgerConstructor,
  fetchOrderDetails,
} from '../../utils/constants';
import styles from './burger-constructor.module.css';

const BurgerConstructor = () => {
  const { bun: selectedBun, fillings: selectedFillings } = useSelector(fetchBurgerConstructor);
  const { ingredients: allIngredients } = useSelector(fetchAllIngredients);
  const { orderId, openModal, orderFailed } = useSelector(fetchOrderDetails);
  const dispatch = useDispatch();

  const [, dropTarget] = useDrop({
    accept: 'ingredient',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
    drop(droppedIngredient) {
      dispatch(addIngredient(droppedIngredient));

      if (droppedIngredient.type !== 'bun') {
        dispatch(increaseCount(droppedIngredient._id, 1));
      } else {
        dispatch(setCount(droppedIngredient._id, 2));
        allIngredients.forEach((ingredient) => {
          if (ingredient.info.type === 'bun' && ingredient.info._id !== droppedIngredient._id) {
            dispatch(setCount(ingredient.info._id, 0));
          }
        });
      }
    },
  });

  const closeOrderModal = () => {
    dispatch(closeOrder());

    if (!orderFailed) {
      dispatch(resetOrderIngredients());

      allIngredients
        .filter(({ qty }) => qty > 0)
        .forEach(({ info }) => dispatch(setCount(info._id, 0)));
    }
  };

  const totalPrice = useMemo(() => {
    const fillingsPrice = selectedFillings.reduce(
      (price, filling) => price + filling.info.price,
      0,
    );
    const bunPrice = selectedBun ? selectedBun.info.price * 2 : 0;

    return fillingsPrice + bunPrice;
  }, [selectedBun, selectedFillings]);

  return (
    <>
      <section className={`${styles.section} pl-5 pr-5`}>
        <div className={`${styles.list} mt-25 mb-13`} ref={dropTarget}>
          {!selectedBun && !selectedFillings.length && (
            <h2 className={`${styles.hint} text text_type_main-medium text_color_inactive`}>
              Выберите булку
            </h2>
          )}

          {selectedBun && (
            <div className={`ml-8 pl-4 pr-4 mr-3`}>
              <ConstructorElement
                type="top"
                isLocked={true}
                text={`${selectedBun.info.name} (верх)`}
                price={selectedBun.info.price}
                index={selectedBun.info._id}
                thumbnail={selectedBun.info.image}
              />
            </div>
          )}

          {selectedFillings.length ? (
            <ul className={`${styles.list__scroll} custom-scroll`}>
              {selectedFillings.map((filling, index) => (
                <ConstructorIngredient data={filling} key={filling.id} index={index} />
              ))}
            </ul>
          ) : (
            selectedBun && (
              <h2 className={`${styles.hint} text text_type_main-medium text_color_inactive`}>
                Выберите начинки и соусы
              </h2>
            )
          )}

          {selectedBun && (
            <div className={`ml-8 pl-4 pr-4`}>
              <ConstructorElement
                type="bottom"
                isLocked={true}
                text={`${selectedBun.info.name} (верх)`}
                price={selectedBun.info.price}
                index={selectedBun.info._id}
                thumbnail={selectedBun.info.image}
              />
            </div>
          )}
        </div>

        <Checkout totalPrice={totalPrice || 0} />
      </section>

      {openModal && (
        <Modal closeModal={closeOrderModal}>
          <OrderDetails orderId={orderId} />
        </Modal>
      )}
    </>
  );
};

export default BurgerConstructor;
