export const fetchAllIngredients = (store: { ingredients: any }) => store.ingredients;
export const fetchSingleIngredient = (store: { ingredient: any }) => store.ingredient;
export const fetchBurgerConstructor = (store: { burgerConstructor: any }) =>
  store.burgerConstructor;
export const fetchOrderDetails = (store: { order: any }) => store.order;
export const fetchBurgerFillings = (store: { burgerConstructor: { fillings: any } }) =>
  store.burgerConstructor.fillings;
export const getUser = (store: { auth: { user: any } }) => store.auth.user;
export const getPassword = (store: { auth: { password: any } }) => store.auth.password;
export const getPwdResetRequested = (store: { auth: { pwdResetRequested: any } }) =>
  store.auth.pwdResetRequested;
export const getPwdSubmitSuccess = (store: { auth: { pwdSubmitSuccess: any } }) =>
  store.auth.pwdSubmitSuccess;
