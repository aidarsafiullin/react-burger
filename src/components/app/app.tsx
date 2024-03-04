import { useEffect } from 'react';
import { useDispatch } from '../../hooks';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Layout from '../layout/layout';
import ProtectedRouteElement from '../protected-route/protected-route';
import { getIngredients } from '../../services/actions/ingredients';

import Modal from '../modal/modal';
import {
  ConstructorPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  ForgotPasswordPage,
  NotFound404,
  ProfilePage,
  IngredientPage,
  OrdersPage,
  FeedPage,
  OrderPage,
} from '../../pages';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const background = location.state?.background;

  useEffect(() => {
    // Получение списка ингредиентов при загрузке компонента
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <Routes location={background || location}>
        <Route element={<Layout />}>
          <Route path="/" element={<ConstructorPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/feed/:id" element={<OrderPage />} />
          <Route element={<ProtectedRouteElement isUserAllowed={true} />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/orders" element={<OrdersPage />} />
            <Route path="/profile/orders/:id" element={<OrderPage />} />
          </Route>
          <Route element={<ProtectedRouteElement isUserAllowed={false} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route path="/ingredients/:id" element={<IngredientPage />} />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>

      {/* Модальные окна */}
      {background && (
        <Routes>
          {['/ingredients/:id', '/feed/:id', '/profile/orders/:id'].map((path) => (
            <Route
              key={path}
              path={path}
              element={
                <Modal onClose={() => navigate(-1)}>
                  {path.includes('ingredients') ? <IngredientDetails /> : <OrderDetails />}
                </Modal>
              }
            />
          ))}
        </Routes>
      )}
    </>
  );
};

export default App;
