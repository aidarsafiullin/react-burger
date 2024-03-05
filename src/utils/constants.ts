const BASE_URL = 'https://norma.nomoreparties.space/api';

export const Url = {
  Ingredients: `${BASE_URL}/ingredients`,
  Order: `${BASE_URL}/orders`,
  Login: `${BASE_URL}/auth/login`,
  Register: `${BASE_URL}/auth/register`,
  Logout: `${BASE_URL}/auth/logout`,
  Token: `${BASE_URL}/auth/token`,
  Reset: `${BASE_URL}/password-reset`,
  User: `${BASE_URL}/auth/user`,
  PwdReset: `${BASE_URL}/password-reset`,
  PwdSubmit: `${BASE_URL}/password-reset/reset`,
};

export const UrlWS = {
  All: 'wss://norma.nomoreparties.space/orders/all',
  User: 'wss://norma.nomoreparties.space/orders',
};
