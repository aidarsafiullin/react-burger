import { createPortal } from 'react-dom';
import React from 'react';
import styles from './modal.module.css';
import ModalOverlay from './modal-overlay/modal-overlay';
import ModalHeader from './modal-header/modal-header';
import PropTypes from 'prop-types';
const modalRoot = document.getElementById('modal');

const Modal = ({ closeModal, children }) => {
  React.useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? closeModal() : null);
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [closeModal]);

  return createPortal(
    <div className={`${styles.wrapper}`}>
      <div className={styles.modal}>
        <ModalHeader closeModal={closeModal} />
        {children}
      </div>
      <ModalOverlay closeModal={closeModal} />
    </div>,
    modalRoot,
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
