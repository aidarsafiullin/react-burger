import { getIngredientsData } from '../../utils/api';

export const ActionTypes = {
  GET_INGREDIENTS_REQUEST: 'GET_ITEMS_REQUEST',
  GET_INGREDIENTS_SUCCESS: 'GET_ITEMS_SUCCESS',
  GET_INGREDIENTS_FAILED: 'GET_ITEMS_FAILED',
  INCREASE_COUNT: 'INCREASE_COUNT',
  DECREASE_COUNT: 'DECREASE_COUNT',
  SET_COUNT: 'SET_COUNT',
};

export const getIngredientsRequest = () => ({
  type: ActionTypes.GET_INGREDIENTS_REQUEST,
});

export const getIngredientsSuccess = (data) => ({
  type: ActionTypes.GET_INGREDIENTS_SUCCESS,
  data,
});

export const getIngredientsFailed = () => ({
  type: ActionTypes.GET_INGREDIENTS_FAILED,
});

export const getIngredients = (url) => (dispatch) => {
  dispatch(getIngredientsRequest());
  getIngredientsData(url)
    .then((res) => {
      if (res && res.success) {
        dispatch(getIngredientsSuccess(res.data));
      } else {
        dispatch(getIngredientsFailed());
      }
    })
    .catch((e) => {
      dispatch(getIngredientsFailed());
      console.log(`Ошибка при загрузке данных: ${e}`);
    });
};

export const increaseCount = (id, count) => ({
  type: ActionTypes.INCREASE_COUNT,
  id,
  count,
});

export const decreaseCount = (id, count) => ({
  type: ActionTypes.DECREASE_COUNT,
  id,
  count,
});

export const setCount = (id, count) => ({
  type: ActionTypes.SET_COUNT,
  id,
  count,
});
