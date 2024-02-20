import { v4 as uuid } from 'uuid';
import {
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  RESET_INGREDIENTS,
  MOVE_INGREDIENT,
} from '../constants/burger-constructor';
import { TIngredientFilling, TIngredientInfo } from '../types/data';

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly data: TIngredientFilling;
}

export interface IDeleteIngredient {
  id: string;
  readonly type: typeof DELETE_INGREDIENT;
}

export interface IResetIngredient {
  readonly type: typeof RESET_INGREDIENTS;
}

export interface IMoveIngredient {
  readonly type: typeof MOVE_INGREDIENT;
  array: TIngredientFilling[];
}

export type TConstructorActions =
  | IAddIngredient
  | IDeleteIngredient
  | IResetIngredient
  | IMoveIngredient;

export const addIngredient = (ingredient: TIngredientInfo) => ({
  type: ADD_INGREDIENT,
  data: { info: ingredient, id: uuid() },
});

export const deleteIngredient = (id: string) => ({
  type: DELETE_INGREDIENT,
  id: id,
});

export const resetOrderIngredients = () => ({
  type: RESET_INGREDIENTS,
});

export const moveIngredient = (
  array: TIngredientFilling[],
  dragIndex: number,
  dropIndex: number,
) => {
  const newArray = [...array]; // создаем копию массива

  // Обмениваем элементы в новом массиве
  const draggedItem = newArray[dragIndex];
  newArray[dragIndex] = newArray[dropIndex];
  newArray[dropIndex] = draggedItem;

  return {
    type: MOVE_INGREDIENT,
    array: newArray,
  };
};
