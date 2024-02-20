import { TStoreAuth, TStoreConstructor, TStoreIngredients, TStoreOrder } from './types/state';

export const fetchAllIngredients = (store: TStoreIngredients) => store.ingredients;
export const fetchBurgerConstructor = (store: TStoreConstructor) => store.burgerConstructor;
export const fetchOrderDetails = (store: TStoreOrder) => store.order;
export const fetchBurgerFillings = (store: TStoreConstructor) => store.burgerConstructor.fillings;
export const getUser = (store: TStoreAuth) => store.auth.user;
export const getPassword = (store: TStoreAuth) => store.auth.password;
export const getPwdResetRequested = (store: TStoreAuth) => store.auth.pwdResetRequested;
export const getPwdSubmitSuccess = (store: TStoreAuth) => store.auth.pwdSubmitSuccess;
