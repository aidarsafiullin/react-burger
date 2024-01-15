import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { ingredientDetailsReducer } from './ingredient-details';
import { constructorReducer } from './burger-constructor';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  order: orderReducer,
  ingredients: ingredientsReducer,
  ingredient: ingredientDetailsReducer,
});
