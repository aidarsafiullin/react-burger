import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { constructorReducer } from './burger-constructor';
import { authReducer } from './auth';
import { orderReducer } from './order';

export const rootReducer = combineReducers({
  burgerConstructor: constructorReducer,
  order: orderReducer,
  ingredients: ingredientsReducer,
  auth: authReducer,
});
