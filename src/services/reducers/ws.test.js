import { wsReducer, initialState } from './ws';
import * as types from '../constants/ws';
import { order } from '../../utils/order-test-data';

describe('ws reducer', () => {
  it('should return initial state', () => {
    expect(wsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(
      wsReducer(initialState, {
        type: types.WS_CONNECTION_SUCCESS,
      }),
    ).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(
      wsReducer(initialState, {
        type: types.WS_CONNECTION_ERROR,
      }),
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(
      wsReducer(
        {
          ...initialState,
          wsConnected: true,
        },
        {
          type: types.WS_CONNECTION_CLOSED,
        },
      ),
    ).toEqual({
      ...initialState,
      wsConnected: false,
      orders: [],
      total: null,
      totalToday: null,
    });
  });

  it('should handle WS_GET_MESSAGE', () => {
    expect(
      wsReducer(
        {
          ...initialState,
          wsConnected: true,
        },
        {
          type: types.WS_GET_MESSAGE,
          payload: {
            orders: order,
            total: 10, // примерное значение
            totalToday: 5, // примерное значение
          },
        },
      ),
    ).toEqual({
      ...initialState,
      wsConnected: true,
      orders: order,
      total: 10,
      totalToday: 5,
    });
  });
});
