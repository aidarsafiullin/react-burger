import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from '../../hooks';
import styles from '../form.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useState, SyntheticEvent } from 'react';
import { updatePassword } from '../../services/actions/auth';
import { TForgotFormState } from '../../services/types/data';

export const ForgotPasswordPage = () => {
  const initialFormState: TForgotFormState = {
    email: '',
  };

  const [form, setValue] = useState<TForgotFormState>(initialFormState);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordUpdate = (e: SyntheticEvent) => {
    e.preventDefault();

    dispatch(updatePassword(form));
    navigate('/reset-password');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handlePasswordUpdate} className={styles.form}>
        <h1 className="text text_type_main-medium mb-6">Восстановление пароля</h1>
        <EmailInput value={form.email || ''} name="email" extraClass="mb-6" onChange={onChange} />
        <Button size="medium" extraClass={styles.btn} htmlType="submit">
          Восстановить
        </Button>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вспомнили пароль?
          <Link to="/login" className="text text_type_main-default text_color_accent pl-2">
            Войти
          </Link>
        </p>
      </form>
    </>
  );
};
