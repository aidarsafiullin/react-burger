import { useSelector, useDispatch } from '../../hooks';
import styles from './profile.module.css';
import Profile from '../../components/profile/profile';
import { ChangeEvent, FormEvent, SyntheticEvent, useState } from 'react';
import { getUser, getPassword } from '../../services/selectors';
import { Input, PasswordInput, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { TUserFormState } from '../../services/types/data';
import { updateUserInfo } from '../../services/actions/auth';

export const ProfilePage = () => {
  const userInfo = useSelector(getUser);
  const password = useSelector(getPassword);

  const dispatch = useDispatch();

  const initialFormState: TUserFormState = {
    name: userInfo?.name || '',
    email: userInfo?.email || '',
    password: password || '******',
  };

  const description = 'В этом разделе вы можете изменить свои персональные данные';

  const [form, setForm] = useState<TUserFormState>(initialFormState);
  const [isChanged, setIsChanged] = useState(false);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setIsChanged(true);
  };

  useEffect(() => {
    if (userInfo && password) {
      setForm({ name: userInfo.name, email: userInfo.email, password: password });
    } else if (userInfo) {
      setForm({ name: userInfo.name, email: userInfo.email, password: '******' });
    } else setForm(initialFormState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo, password]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateUserInfo(form));
    setIsChanged(false);
  };

  const handleCancel = () => {
    setForm(initialFormState);
    setIsChanged(false);
  };

  return (
    <div className={`${styles.container}`}>
      <Profile description={description} />
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
          <Input
            type="email"
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
