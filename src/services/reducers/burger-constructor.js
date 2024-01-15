import { ActionType } from '../actions/burger-constructor';

const initialState = {
  fillings: [],
  bun: null,
};

export const constructorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD:
      return action.payload.info.type !== 'bun'
        ? {
            ...state,
            fillings: [...state.fillings, { info: action.payload.info, id: action.payload.id }],
          }
        : {
            ...state,
            bun: { info: action.payload.info, id: action.payload.id },
          };

    case ActionType.DELETE: {
      return {
        ...state,
        fillings: [...state.fillings].filter((item) => item.id !== action.payload.id),
      };
    }
    case ActionType.RESET: {
      return {
        ...state,
        fillings: [],
        bun: null,
      };
    }
    case ActionType.MOVE: {
      return {
        ...state,
        fillings: action.payload.array,
      };
    }
    default: {
      return state;
    }
  }
};
