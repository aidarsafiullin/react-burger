import { ActionTypes } from '../actions/ingredient-details';

const initialState = {
  ingredient: null,
};

export const ingredientDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.OPEN_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredient: action.payload,
      };
    }
    case ActionTypes.CLOSE_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredient: null,
      };
    }
    default: {
      return state;
    }
  }
};
