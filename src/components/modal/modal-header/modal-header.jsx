import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './modal-header.module.css';

const ModalHeader = ({ title, onClose }) => {
  const [isHoverClose, setHoverClose] = React.useState(false);

  return (
    <div className={`${styles.header} mt-10 `}>
      <h2 className={`${styles.title} text text_type_main-large`}>{title}</h2>
      <div
        className={styles.close}
        onMouseEnter={() => setHoverClose(true)}
        onMouseLeave={() => setHoverClose(false)}>
        <CloseIcon onClick={onClose} type={isHoverClose ? 'secondary' : 'primary'} />
      </div>
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
