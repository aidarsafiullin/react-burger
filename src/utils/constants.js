export const IngredientTypes = {
  bun: 'Булки',
  sauce: 'Соусы',
  main: 'Начинки',
};

const BASE_URL = 'https://norma.nomoreparties.space/api';
export const URL_INGREDIENTS = `${BASE_URL}/ingredients`;
export const URL_ORDERS = `${BASE_URL}/orders`;
export const urlLogin = `${BASE_URL}/auth/login`;
export const urlRegister = `${BASE_URL}/auth/register`;
export const urlLogout = `${BASE_URL}/auth/logout`;
export const urlToken = `${BASE_URL}/auth/token`;
export const urlReset = `${BASE_URL}/password-reset`;
export const urlUser = `${BASE_URL}/auth/user`;
export const urlPwdReset = `${BASE_URL}/password-reset`;
export const urlPwdSubmit = `${BASE_URL}/password-reset/reset`;

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
