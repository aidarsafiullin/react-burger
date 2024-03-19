import { constructorReducer, initialState } from './burger-constructor';
import * as types from '../constants/burger-constructor';
import { main, bun, uuid } from '../../utils/ingredients-test-data';

describe('constructor reducer', () => {
  it('should return initial state', () => {
    expect(constructorReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle ADD_INGREDIENT', () => {
    expect(
      constructorReducer(initialState, {
        type: types.ADD_INGREDIENT,
        data: { info: main, id: uuid },
      }),
    ).toEqual({
      bun: null,
      fillings: [
        {
          info: main,
          id: uuid,
        },
      ],
    });
  });

  it('should handle DELETE_INGREDIENT', () => {
    expect(
      constructorReducer(
        {
          bun: null,
          fillings: [
            {
              info: main,
              id: uuid,
            },
          ],
        },
        {
          type: types.DELETE_INGREDIENT,
          id: uuid,
        },
      ),
    ).toEqual(initialState);
  });

  it('should handle RESET_INGREDIENTS', () => {
    expect(
      constructorReducer(initialState, {
        type: types.RESET_INGREDIENTS,
      }),
    ).toEqual({
      bun: null,
      fillings: [],
    });
  });

  it('should handle MOVE_INGREDIENT', () => {
    const fillings = [{ info: main, id: uuid }];
    expect(
      constructorReducer(
        {
          bun: bun,
          fillings: fillings,
        },
        {
          type: types.MOVE_INGREDIENT,
          array: fillings,
        },
      ),
    ).toEqual({
      bun: bun,
      fillings: fillings,
    });
  });
});
