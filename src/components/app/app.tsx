import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import { useDispatch } from '../../hooks';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import Layout from '../layout/layout';
import {
  LoginPage,
  MainPage,
  ResetPasswordPage,
  RegisterPage,
  NotFound404,
  ForgotPasswordPage,
  IngredientPage,
  ProfilePage,
  OrdersPage,
} from '../../pages';
import ProtectedRoute from '../protected-route/protected-route';
import { getIngredients } from '../../services/actions/ingredients';

const App = () => {
  const location = useLocation();
  const background = location.state?.background;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <>
      <Routes location={background || location}>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRoute isUserAllowed={false} />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          </Route>
          <Route element={<ProtectedRoute isUserAllowed={true} />}>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/orders" element={<OrdersPage />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
          <Route path="/ingredients/:id" element={<IngredientPage />} />
        </Route>
      </Routes>
      <Routes>
        {background && (
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                closeModal={() => {
                  navigate(-1);
                }}>
                <IngredientDetails />
              </Modal>
            }
          />
        )}
      </Routes>
    </>
  );
};

export default App;
