import { wsUserReducer, initialState } from './wsUser';
import * as types from '../constants/wsUser';
import { order } from '../../utils/order-test-data';

describe('wsUser reducer', () => {
  it('should return initial state', () => {
    expect(wsUserReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle WS_USER_CONNECTION_SUCCESS', () => {
    expect(
      wsUserReducer(initialState, {
        type: types.WS_USER_CONNECTION_SUCCESS,
      }),
    ).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it('should handle WS_USER_CONNECTION_ERROR', () => {
    expect(
      wsUserReducer(initialState, {
        type: types.WS_USER_CONNECTION_ERROR,
      }),
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it('should handle WS_USER_CONNECTION_CLOSED', () => {
    expect(
      wsUserReducer(
        {
          ...initialState,
          wsConnected: true,
        },
        {
          type: types.WS_USER_CONNECTION_CLOSED,
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

  it('should handle WS_USER_GET_MESSAGE', () => {
    expect(
      wsUserReducer(
        {
          ...initialState,
          wsConnected: true,
        },
        {
          type: types.WS_USER_GET_MESSAGE,
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
