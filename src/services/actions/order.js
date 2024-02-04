import { placeOrder, updateTokenRequest } from '../../utils/api';
import { getCookie, setCookie } from '../../utils/cookies';

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

export const checkoutOrder = (ingredients) => {
  return function (dispatch) {
    dispatch(checkoutOrderRequest());
    placeOrder(ingredients)
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          dispatch(checkoutOrderSuccess(res.order));
        } else {
          const refreshToken = getCookie('refreshToken');
          updateTokenRequest(refreshToken)
            .then((res) => {
              if (res && res.success) {
                setCookie('accessToken', res.accessToken.split('Bearer ')[1]);
                setCookie('refreshToken', res.refreshToken);
                dispatch(checkoutOrderRequest());
                placeOrder(ingredients)
                  .then((res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)))
                  .then((res) => {
                    if (res && res.success) {
                      dispatch(checkoutOrderSuccess(res.order));
                    } else {
                      dispatch(checkoutOrderFailed());
                    }
                  })
                  .catch((e) => {
                    dispatch(checkoutOrderFailed());
                    console.log(`Ошибка при оформлении заказа: ${e}`);
                  });
              } else {
                dispatch(checkoutOrderFailed());
              }
            })
            .catch((e) => {
              dispatch(checkoutOrderFailed());
              console.log(`Ошибка при обновлении токена: ${e}`);
            });
        }
      })
      .catch((e) => {
        dispatch(checkoutOrderFailed());
        console.log(`Ошибка при загрузке данных: ${e}`);
      });
  };
};

export const resetOrderId = () => closeOrder();
