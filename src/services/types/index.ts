import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { store } from '../../utils/store';
import { TIngredientsActions } from '../actions/ingredients';
import { TConstructorActions } from '../actions/burger-constructor';
import { TOrderActions } from '../actions/order';
import { TAuthActions } from '../actions/auth';

export type RootState = ReturnType<typeof store.getState>;

type TAppActions = TIngredientsActions | TConstructorActions | TOrderActions | TAuthActions;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAppActions>;

export type AppDispatch = ThunkDispatch<RootState, never, TAppActions>;
