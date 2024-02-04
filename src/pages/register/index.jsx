import { useState } from 'react';
import styles from '../form.module.css';
import { registerUser } from '../../services/actions/auth';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const submitRegistration = (e) => {
    e.preventDefault();

    dispatch(registerUser(form));
  };

  const onChange = (e) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  const [form, setValue] = useState({});

  return (
    <form className={styles.form} onSubmit={submitRegistration}>
      <h1 className="text text_type_main-medium text_color_primary mb-6">Регистрация</h1>
      <Input
        value={form?.name || ''}
        name="name"
        placeholder="Имя"
        type="text"
        onChange={onChange}
        extraClass="mb-6"
      />
      <EmailInput
        value={form?.email || ''}
        name="email"
        onChange={onChange}
        onchange=""
        extraClass="mb-6"
      />
      <PasswordInput
        value={form?.password || ''}
        name="password"
        onChange={onChange}
        //onchange=""
        extraClass="mb-6"
      />
      <Button htmlType="submit" size="medium" extraClass={styles.btn}>
        Зарегистрироваться
      </Button>
      <p className="text text_type_main-default text_color_inactive mt-20">
        Уже зарегистрированы?
        <Link to="/login" className="text text_type_main-default text_color_accent pl-2">
          Войти
        </Link>
      </p>
    </form>
  );
};