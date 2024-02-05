import {
  URL_INGREDIENTS,
  URL_ORDERS,
  urlRegister,
  urlLogin,
  urlLogout,
  urlUser,
  urlPwdReset,
  urlPwdSubmit,
  urlToken,
} from './constants';

import { getCookie } from './cookies';

const checkResponse = (res) => (res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));

const fetchData = (url, method, data = null) => {
  const headers = {
    authorization: '',
    'Content-Type': 'application/json',
  };

  const requestOptions = {
    method,
    headers,
  };

  if (data) {
    requestOptions.body = JSON.stringify(data);
  }

  return fetch(url, requestOptions).then(checkResponse);
};

const getIngredientsData = () => fetchData(URL_INGREDIENTS, 'GET');

const placeOrder = (ingredients) => {
  const accessToken = getCookie('accessToken');
  return fetch(URL_ORDERS, {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ingredients }),
  }).then(checkResponse);
};

const register = (name, email, password) =>
  fetchData(urlRegister, 'POST', { name, email, password });

const login = (email, password) => fetchData(urlLogin, 'POST', { email, password });

const logout = (refreshToken) => {
  return fetch(urlLogout, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: refreshToken }),
  }).then(checkResponse);
};

const getUser = () => {
  const accessToken = getCookie('accessToken');
  return fetch(urlUser, {
    method: 'GET',
    headers: {
      authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
  }).then(checkResponse);
};

const updateUser = ({ name, email, password }) => {
  const accessToken = getCookie('accessToken');
  return fetch(urlUser, {
    method: 'PATCH',
    headers: {
      authorization: 'Bearer ' + accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  }).then(checkResponse);
};

const pwdResetRequest = ({ email }) => {
  return fetch(urlPwdReset, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then(checkResponse);
};

const pwdSubmitRequest = ({ password, token }) => {
  return fetch(urlPwdSubmit, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  }).then(checkResponse);
};

const updateTokenRequest = (refreshToken) => {
  return fetch(urlToken, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token: refreshToken }),
  }).then(checkResponse);
};

export {
  getIngredientsData,
  placeOrder,
  register,
  login,
  logout,
  getUser,
  updateUser,
  pwdResetRequest,
  pwdSubmitRequest,
  updateTokenRequest,
};
