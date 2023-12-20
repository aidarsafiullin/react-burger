import styles from './modal-overlay.module.css';

const ModalOverlay = ({ onClose }) => {
  return <div onClick={() => onClose()} className={styles['modal-overlay']}></div>;
};

export default ModalOverlay;
