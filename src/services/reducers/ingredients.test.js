import { ingredientsReducer, initialState } from './ingredients';

import * as types from '../constants/ingredients';

import { main, bun } from '../../utils/ingredients-test-data';

describe('ingredients reducer', () => {
  it('should return initial state', () => {
    expect(ingredientsReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_INGREDIENTS_REQUEST', () => {
    expect(
      ingredientsReducer(initialState, {
        type: types.GET_INGREDIENTS_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      ingredientsRequest: true,
    });
  });

  it('should handle GET_INGREDIENTS_SUCCESS', () => {
    expect(
      ingredientsReducer(
        {
          ...initialState,
          ingredientsRequest: true,
        },
        {
          type: types.GET_INGREDIENTS_SUCCESS,
          data: [bun, main],
        },
      ),
    ).toEqual({
      ingredientsRequest: false,
      ingredientsFailed: false,
      ingredients: [
        { info: bun, qty: 0 },
        { info: main, qty: 0 },
      ],
    });
  });

  it('should handle GET_INGREDIENTS_FAILED', () => {
    expect(
      ingredientsReducer(
        {
          ...initialState,
          ingredientsRequest: true,
        },
        {
          type: types.GET_INGREDIENTS_FAILED,
        },
      ),
    ).toEqual({
      ...initialState,
      ingredientsFailed: true,
    });
  });

  it('should handle INCREASE_COUNT', () => {
    expect(
      ingredientsReducer(
        {
          ...initialState,
          ingredients: [
            { info: bun, qty: 0 },
            { info: main, qty: 0 },
          ],
        },
        {
          type: types.INCREASE_COUNT,
          id: main._id,
          count: 1,
        },
      ),
    ).toEqual({
      ...initialState,
      ingredients: [
        { info: bun, qty: 0 },
        { info: main, qty: 1 },
      ],
    });
  });

  it('should handle DECREASE_COUNT', () => {
    expect(
      ingredientsReducer(
        {
          ...initialState,
          ingredients: [
            { info: bun, qty: 0 },
            { info: main, qty: 1 },
          ],
        },
        {
          type: types.DECREASE_COUNT,
          id: main._id,
          count: 1,
        },
      ),
    ).toEqual({
      ...initialState,
      ingredients: [
        { info: bun, qty: 0 },
        { info: main, qty: 0 },
      ],
    });
  });
});
