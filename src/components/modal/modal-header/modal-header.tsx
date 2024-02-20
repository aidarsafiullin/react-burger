import React, { useState } from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './modal-header.module.css';

// Определение типа пропсов
interface ModalHeaderProps {
  closeModal: () => void;
  title?: string;
}

// Функциональный компонент ModalHeader с типизацией
const ModalHeader: React.FC<ModalHeaderProps> = ({ closeModal, title }) => {
  const [isHoverClose, setHoverClose] = useState(false);

  return (
    <div>
      <div
        className={styles.close}
        onMouseEnter={() => setHoverClose(true)}
        onMouseLeave={() => setHoverClose(false)}>
        <CloseIcon onClick={closeModal} type={isHoverClose ? 'secondary' : 'primary'} />
      </div>
    </div>
  );
};

export default ModalHeader;
