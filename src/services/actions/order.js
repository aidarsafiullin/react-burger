import { placeOrder } from '../../utils/api';

export const ActionTypes = {
  ORDER_CHECKOUT_REQUEST: 'ORDER_CHECKOUT_REQUEST',
  ORDER_CHECKOUT_SUCCESS: 'ORDER_CHECKOUT_SUCCESS',
  ORDER_CHECKOUT_FAILED: 'ORDER_CHECKOUT_FAILED',
  CLOSE_ORDER: 'CLOSE_ORDER',
};

const createAction = (type, payload = {}) => ({
  type,
  ...payload,
});

export const checkoutOrderRequest = () => createAction(ActionTypes.ORDER_CHECKOUT_REQUEST);

export const checkoutOrderSuccess = (orderId) =>
  createAction(ActionTypes.ORDER_CHECKOUT_SUCCESS, { orderId });

export const checkoutOrderFailed = () => createAction(ActionTypes.ORDER_CHECKOUT_FAILED);

export const closeOrder = () => createAction(ActionTypes.CLOSE_ORDER);

export const checkoutOrder = (url, ingredients) => (dispatch) => {
  dispatch(checkoutOrderRequest());
  placeOrder(url, ingredients)
    .then((res) => {
      if (res && res.success) {
        dispatch(checkoutOrderSuccess(res.order));
      } else {
        dispatch(checkoutOrderFailed());
      }
    })
    .catch((e) => {
      dispatch(checkoutOrderFailed());
      console.log(`Ошибка при загрузке данных: ${e}`);
    });
};
