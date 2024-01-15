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

const getIngredientsData = (url) => fetchData(url, 'GET');

const placeOrder = (url, ingredients) => fetchData(url, 'POST', { ingredients });

export { getIngredientsData, placeOrder };
