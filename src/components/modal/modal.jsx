import { createPortal } from 'react-dom';
import React from 'react';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import ModalHeader from './modal-header/modal-header';
import PropTypes from 'prop-types';
const modalRoot = document.getElementById('modal');

const Modal = ({ isModalOpen, closeModal, children, title }) => {
  React.useEffect(() => {
    if (!isModalOpen) return;
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? closeModal() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [closeModal, isModalOpen]);

  return createPortal(
    <div className={`${styles.wrapper} ${isModalOpen ? styles.visible : ''}`}>
      <div className={styles.modal}>
        <ModalHeader title={title} closeModal={closeModal} />
        {children}
      </div>
      <ModalOverlay closeModal={closeModal} />
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
