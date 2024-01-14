import { v4 as uuid } from 'uuid';

// Типы действий
export const ActionType = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  RESET: 'RESET',
  MOVE: 'MOVE',
};

// Создание действий
export const createAction = (type, payload = {}) => ({
  type,
  payload,
});

// Действия
export const addIngredient = (ingredient) =>
  createAction(ActionType.ADD, { info: ingredient, id: uuid() });
export const deleteIngredient = (id) => createAction(ActionType.DELETE, { id });
export const resetOrderIngredients = () => createAction(ActionType.RESET);
export const moveIngredient = (array, dragIndex, dropIndex) => {
  const newArray = [...array];
  [newArray[dragIndex], newArray[dropIndex]] = [newArray[dropIndex], newArray[dragIndex]];
  return createAction(ActionType.MOVE, { array: newArray });
};
