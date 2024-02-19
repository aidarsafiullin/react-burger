import { createPortal } from 'react-dom';
import React from 'react';
import { FC, ReactNode, useEffect } from 'react';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import ModalHeader from './modal-header/modal-header';

type TModal = {
  closeModal: () => void;
  children: ReactNode;
};

const Modal: FC<TModal> = ({ closeModal, children }) => {
  const modalRoot = document.querySelector('#modal');

  React.useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => (e.key === 'Escape' ? closeModal() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [closeModal]);

  return (
    modalRoot &&
    createPortal(
      <div className={`${styles.wrapper}`}>
        <div className={styles.modal}>
          <ModalHeader closeModal={closeModal} />
          {children}
        </div>
        <ModalOverlay closeModal={closeModal} />
      </div>,
      modalRoot,
    )
  );
};

export default Modal;
