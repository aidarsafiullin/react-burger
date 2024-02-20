import { TIngredientData, TIngredientFilling, TIngredientInfo, TUser } from './data';

export type TIngredientsState = {
  ingredients: Array<TIngredientData>;
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
};

export type TConstructorState = {
  fillings: Array<TIngredientFilling>;
  bun: {
    info: TIngredientInfo;
    id: string;
  } | null;
};

export type TOrderState = {
  orderRequest: boolean;
  orderFailed: boolean;
  orderId: number | null;
  openModal: boolean;
};

export type TAuthState = {
  user: TUser | null;
  password: string | undefined;
  authRequest: boolean;
  authFailed: boolean;
  pwdResetRequested: boolean;
  pwdSubmitSuccess: boolean;
};

export type TStoreIngredients = {
  ingredients: TIngredientsState;
};

export type TStoreConstructor = {
  burgerConstructor: TConstructorState;
};

export type TStoreOrder = {
  order: TOrderState;
};

export type TStoreAuth = {
  auth: TAuthState;
};
