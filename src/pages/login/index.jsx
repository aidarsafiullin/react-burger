import { Link } from 'react-router-dom';
import styles from '../form.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginUser } from '../../services/actions/auth';
import {
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const [form, setValue] = useState({});

  const submitLogin = (e) => {
    e.preventDefault();

    dispatch(loginUser(form));
  };

  return (
    <form onSubmit={submitLogin} className={styles.form}>
      <h1 className="text text_type_main-medium text_color_primary mb-6">Вход</h1>
      <EmailInput value={form?.email || ''} name="email" onChange={onChange} extraClass="mb-6" />
      <PasswordInput
        value={form?.password || ''}
        name="password"
        onChange={onChange}
        extraClass="mb-6"
      />
      <Button htmlType="submit" size="medium" extraClass={styles.btn}>
        Войти
      </Button>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Вы — новый пользователь?
        <Link to="/register" className="text text_type_main-default text_color_accent pl-2">
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive mt-4">
        Забыли пароль?
        <Link to="/forgot-password" className="text text_type_main-default text_color_accent pl-2">
          Восстановить пароль
        </Link>
      </p>
    </form>
  );
};