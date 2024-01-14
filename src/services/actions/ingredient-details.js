export const ActionTypes = {
  OPEN_INGREDIENT_DETAILS: 'OPEN_INGREDIENT_DETAILS',
  CLOSE_INGREDIENT_DETAILS: 'CLOSE_INGREDIENT_DETAILS',
};

export const openIngredientDetails = (ingredient) => ({
  type: ActionTypes.OPEN_INGREDIENT_DETAILS,
  payload: ingredient,
});

export const closeIngredientDetails = () => ({
  type: ActionTypes.CLOSE_INGREDIENT_DETAILS,
});
