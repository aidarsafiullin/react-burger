import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import styles from './modal-header.module.css';

const ModalHeader = ({ closeModal }) => {
  const [isHoverClose, setHoverClose] = React.useState(false);

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

ModalHeader.propTypes = {
  title: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};

export default ModalHeader;
