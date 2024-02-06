import { useSelector, useDispatch } from 'react-redux';
import styles from './profile.module.css';
import Profile from '../../components/profile/profile';
import { useState } from 'react';
import { getCookie } from '../../utils/cookies';
import { logoutUser } from '../../services/actions/auth';
import { getUser, getPassword } from '../../services/selectors';
import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { updateUserInfo } from '../../services/actions/auth';

export const ProfilePage = () => {
  const userInfo = useSelector(getUser);
  const password = useSelector(getPassword);
  const refreshToken = getCookie('refreshToken');

  const dispatch = useDispatch();
  const formInit = {
    name: userInfo?.name || '',
    email: userInfo?.email || '',
    password: password || '******',
  };

  const description = 'В этом разделе вы можете изменить свои персональные данные';

  const [form, setForm] = useState(formInit);
  const [isChanged, setIsChanged] = useState(false);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsChanged(true);
  };

  useEffect(() => {
    if (userInfo && password) {
      setForm({ name: userInfo.name, email: userInfo.email, password: password });
    } else if (userInfo) {
      setForm({ name: userInfo.name, email: userInfo.email, password: '******' });
    } else setForm(formInit);
  }, [userInfo, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserInfo(form));
    setIsChanged(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutUser(refreshToken));
  };

  const handleCancel = () => {
    setForm(formInit);
    setIsChanged(false);
  };

  return (
    <div className={`${styles.container}`}>
      <Profile description={description} onLogout={handleLogout} />
      {userInfo && (
        <form onSubmit={handleSubmit} className={styles.form}>
          <Input
            type="text"
            placeholder="Имя"
            onChange={onChange}
            value={form.name}
            name="name"
            icon="EditIcon"
            extraClass={`mb-6 ${styles.input}`}
          />
          <EmailInput
            placeholder="Логин"
            onChange={onChange}
            value={form.email}
            name="email"
            icon="EditIcon"
            extraClass={`mb-6 ${styles.input}`}
          />
          <PasswordInput
            placeholder="Пароль"
            onChange={onChange}
            value={form.password}
            name="password"
            icon="EditIcon"
            extraClass={styles.input}
          />
          {isChanged && (
            <div className={`mt-6 mr-4 ${styles.handlers}`}>
              <Button size="medium" htmlType="button" type="secondary" onClick={handleCancel}>
                Отмена
              </Button>
              <Button htmlType="submit" size="medium">
                Сохранить
              </Button>
            </div>
          )}
        </form>
      )}
    </div>
  );
};
