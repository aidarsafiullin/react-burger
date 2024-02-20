import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from '../../hooks';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { getUser } from '../../services/selectors';
import { getCookie } from '../../utils/cookies';
import { getUserInfo } from '../../services/actions/auth';

type TProtectedRouteElement = {
  isUserAllowed: Boolean,
};

const ProtectedRoute: FC<TProtectedRouteElement> = ({ isUserAllowed }) => {
  const dispatch = useDispatch();
  const refreshToken = getCookie('refreshToken');
  const { state, pathname } = useLocation();
  const user = useSelector(getUser);

  useEffect(() => {
    if (!user && refreshToken) {
      dispatch(getUserInfo());
    }
  }, [refreshToken, user, dispatch]);

  if (user && !isUserAllowed) {
    return <Navigate to={state?.prev ? state.prev : '/'} />;
  }

  if (!user && !refreshToken && isUserAllowed) {
    return <Navigate to="/login" state={{ prev: pathname }} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
