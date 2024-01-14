import { ActionTypes } from '../actions/order';

const initialState = {
  orderRequest: false,
  orderFailed: false,
  orderId: null,
  openModal: false,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ORDER_CHECKOUT_REQUEST:
      return { ...state, orderRequest: true };
    case ActionTypes.ORDER_CHECKOUT_SUCCESS:
      return {
        ...state,
        orderRequest: false,
        orderFailed: false,
        orderId: action.orderId.number,
        openModal: true,
      };
    case ActionTypes.ORDER_CHECKOUT_FAILED:
      return { ...state, orderRequest: false, orderFailed: true, openModal: true };
    case ActionTypes.CLOSE_ORDER:
      return { ...state, orderId: null, openModal: false };
    default:
      return state;
  }
};
