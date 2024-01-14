export const IngredientTypes = {
  bun: 'Булки',
  sauce: 'Соусы',
  main: 'Начинки',
};

export const URL_INGREDIENTS = 'https://norma.nomoreparties.space/api/ingredients';
export const URL_ORDERS = 'https://norma.nomoreparties.space/api/orders';

export const fetchAllIngredients = (store) => store.ingredients;
export const fetchSingleIngredient = (store) => store.ingredient;
export const fetchBurgerConstructor = (store) => store.burgerConstructor;
export const fetchOrderDetails = (store) => store.order;
export const fetchBurgerFillings = (store) => store.burgerConstructor.fillings;

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
