import { orderReducer, initialState } from './order';
import * as types from '../constants/order';

describe('order reducer', () => {
  it('should return initial state', () => {
    expect(orderReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ORDER_CHECKOUT_REQUEST', () => {
    expect(
      orderReducer(initialState, {
        type: types.ORDER_CHECKOUT_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      orderRequest: true,
      openModal: true,
    });
  });

  it('should handle ORDER_CHECKOUT_SUCCESS', () => {
    expect(
      orderReducer(
        {
          ...initialState,
          orderRequest: true,
        },
        {
          type: types.ORDER_CHECKOUT_SUCCESS,
          id: 100,
        },
      ),
    ).toEqual({
      ...initialState,
      orderId: 100,
    });
  });

  it('should handle ORDER_CHECKOUT_FAILED', () => {
    expect(
      orderReducer(
        {
          ...initialState,
          orderRequest: true,
        },
        {
          type: types.ORDER_CHECKOUT_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      orderFailed: true,
    });
  });
});
