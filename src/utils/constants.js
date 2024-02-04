export const IngredientTypes = {
  bun: 'Булки',
  sauce: 'Соусы',
  main: 'Начинки',
};

export const URL_INGREDIENTS = 'https://norma.nomoreparties.space/api/ingredients';
export const URL_ORDERS = 'https://norma.nomoreparties.space/api/orders';
export const urlLogin = 'https://norma.nomoreparties.space/api/auth/login';
export const urlRegister = 'https://norma.nomoreparties.space/api/auth/register';
export const urlLogout = 'https://norma.nomoreparties.space/api/auth/logout';
export const urlToken = 'https://norma.nomoreparties.space/api/auth/token';
export const urlReset = 'https://norma.nomoreparties.space/api/password-reset';
export const urlUser = 'https://norma.nomoreparties.space/api/auth/user';
export const urlPwdReset = 'https://norma.nomoreparties.space/api/password-reset';
export const urlPwdSubmit = 'https://norma.nomoreparties.space/api/password-reset/reset';

export const fetchAllIngredients = (store) => store.ingredients;
export const fetchSingleIngredient = (store) => store.ingredient;
export const fetchBurgerConstructor = (store) => store.burgerConstructor;
export const fetchOrderDetails = (store) => store.order;
export const fetchBurgerFillings = (store) => store.burgerConstructor.fillings;
export const getUser = (store) => store.auth.user;
export const getPassword = (store) => store.auth.password;
export const getPwdResetRequested = (store) => store.auth.pwdResetRequested;
export const getPwdSubmitSuccess = (store) => store.auth.pwdSubmitSuccess;

export const IngredientDetail = [
  {
    id: 0,
    key: 'Калории,ккал',
    value: 'calories',
  },
  { id: 1, key: 'Белки, г', value: 'proteins' },
  {
    id: 2,
    key: 'Жиры, г',
    value: 'fat',
  },
  {
    id: 3,
    key: 'Углеводы, г',
    value: 'carbohydrates',
  },
];
