import styles from './modal-overlay.module.css';
import { FC } from 'react';

type TModalOverlay = {
  closeModal: () => void;
};

const ModalOverlay: FC<TModalOverlay> = ({ closeModal }) => {
  return <div onClick={closeModal} className={styles['modal-overlay']} />;
};

export default ModalOverlay;
