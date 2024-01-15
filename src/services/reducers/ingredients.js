import { ActionTypes } from '../actions/ingredients';

const initialState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
};

const handleRequest = (state) => ({
  ...state,
  ingredientsRequest: true,
});

const handleSuccess = (state, action) => ({
  ...state,
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredients: action.data.map((item) => ({ info: item, qty: 0 })),
});

const handleFailure = (state) => ({
  ...state,
  ingredientsRequest: false,
  ingredientsFailed: true,
});

const handleCountChange = (state, action) => {
  const updatedIngredients = state.ingredients.map((item) =>
    item.info._id === action.id
      ? {
          ...item,
          qty: action.type === ActionTypes.SET_COUNT ? action.count : item.qty + action.count,
        }
      : item,
  );

  return {
    ...state,
    ingredients: updatedIngredients,
  };
};

export const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_INGREDIENTS_REQUEST:
      return handleRequest(state);
    case ActionTypes.GET_INGREDIENTS_SUCCESS:
      return handleSuccess(state, action);
    case ActionTypes.GET_INGREDIENTS_FAILED:
      return handleFailure(state);
    case ActionTypes.INCREASE_COUNT:
    case ActionTypes.DECREASE_COUNT:
    case ActionTypes.SET_COUNT:
      return handleCountChange(state, action);
    default:
      return state;
  }
};
