import styles from './form.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { SyntheticEvent, useEffect } from 'react';
import { useDispatch, useSelector } from '../hooks';
import { PasswordInput, Input, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { submitPassword } from '../services/actions/auth';
import { getPwdResetRequested, getPwdSubmitSuccess } from '../utils/state';
import { useForm } from '../hooks/useForm';
import { TResetFormState } from '../services/types/data';

export const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialFormState: TResetFormState = {
    password: '',
    token: '',
  };

  const { values, handleChange } = useForm<TResetFormState>(initialFormState);
  const pwdResetRequested = useSelector(getPwdResetRequested);
  const pwdSubmitSuccess = useSelector(getPwdSubmitSuccess);

  useEffect(() => {
    if (!pwdResetRequested) {
      navigate('/forgot-password');
    }
  }, [navigate, pwdResetRequested]);

  const handlePasswordSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(submitPassword(values));
  };

  useEffect(() => {
    if (pwdSubmitSuccess) {
      navigate('/login');
    }
  }, [navigate, pwdSubmitSuccess]);

  return (
    <form onSubmit={handlePasswordSubmit} className={styles.form}>
      <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
      <PasswordInput
        value={values.password}
        name="password"
        placeholder="Введите новый пароль"
        onChange={handleChange}
        extraClass="mb-6"
      />
      <Input
        value={values.token}
        type="text"
        name="token"
        placeholder="Введите код из письма"
        onChange={handleChange}
        extraClass="mb-6"
      />
      <Button htmlType="submit" size="medium" extraClass={styles.btn}>
        Сохранить
      </Button>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вспомнили пароль?
        <Link to="/login" className="text text_type_main-default text_color_accent pl-2">
          Войти
        </Link>
      </p>
    </form>
  );
};
