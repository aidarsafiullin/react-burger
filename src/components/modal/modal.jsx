import { createPortal } from 'react-dom';
import React from 'react';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import ModalHeader from './modal-header/modal-header';
import PropTypes from 'prop-types';
const modalRoot = document.getElementById('modal');

const Modal = ({ showModal, onClose, children, title }) => {
  React.useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? onClose() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [onClose]);

  return createPortal(
    <div className={`${styles.wrapper} ${showModal ? styles.visible : ''}`}>
      <div className={styles.modal}>
        <ModalHeader title={title} onClose={onClose} />
        {children}
      </div>
      <ModalOverlay onClose={onClose} />
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
