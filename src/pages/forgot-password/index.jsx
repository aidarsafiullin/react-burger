import { Link, useNavigate } from 'react-router-dom';
import styles from '../form.module.css';
import { EmailInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updatePassword } from '../../services/actions/auth';

export const ForgotPasswordPage = () => {
  const [form, setValue] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePasswordUpdate = (e) => {
    e.preventDefault();

    dispatch(updatePassword(form));
    navigate('/reset-password');
  };

  const onChange = (e) => {
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
