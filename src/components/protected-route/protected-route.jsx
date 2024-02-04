import { useEffect } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { getUser } from '../../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { getCookie } from '../../utils/cookies';
import { getUserInfo } from '../../services/actions/auth';

const ProtectedRoute = ({ isUserAllowed }) => {
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
