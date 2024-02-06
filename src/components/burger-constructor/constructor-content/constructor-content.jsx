import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import PropTypes from 'prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { deleteIngredient, moveIngredient } from '../../../services/actions/burger-constructor';
import { decreaseCount } from '../../../services/actions/ingredients';
import { ingredientPropTypes } from '../../../utils/types';
import { fetchBurgerFillings } from '../../../services/selectors';
import styles from './constructor-content.module.css';

const ConstructorIngredient = ({ data, index }) => {
  const { _id, name, price, image } = data.info;

  const allFillings = useSelector(fetchBurgerFillings);
  const dispatch = useDispatch();

  const handleDeleteIngredient = () => {
    dispatch(deleteIngredient(data.id));
    dispatch(decreaseCount(_id, 1));
  };

  const ref = useRef(null);
  const id = data.id;

  const [{ isDragging }, dragRef] = useDrag({
    type: 'item',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'item',
    hover: (draggedItem, monitor) => {
      const draggedIndex = draggedItem.index;
      const targetIndex = index;

      if (draggedIndex === targetIndex) return;

      const targetBoundingRect = ref.current?.getBoundingClientRect();
      const targetMiddleY = (targetBoundingRect.bottom - targetBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const clientOffsetY = clientOffset.y - targetBoundingRect.top;

      const isAboveAndBeyondMiddle = draggedIndex < targetIndex && clientOffsetY < targetMiddleY;
      const isBelowAndBeyondMiddle = draggedIndex > targetIndex && clientOffsetY > targetMiddleY;

      if (isAboveAndBeyondMiddle || isBelowAndBeyondMiddle) return;

      dispatch(moveIngredient(allFillings, draggedIndex, targetIndex));
      draggedItem.index = targetIndex;
    },
  });

  dragRef(dropRef(ref));

  const opacity = isDragging ? 0.4 : 1;

  return (
    <li className={`${styles.item} pl-4 pr-4`} ref={ref} style={{ opacity }}>
      <DragIcon type="primary" />
      <ConstructorElement
        isLocked={false}
        text={name}
        price={price}
        index={_id}
        thumbnail={image}
        handleClose={handleDeleteIngredient}
      />
    </li>
  );
};

ConstructorIngredient.propTypes = {
  data: PropTypes.shape({
    info: ingredientPropTypes.isRequired,
    id: PropTypes.string.isRequired,
  }),
  index: PropTypes.number.isRequired,
};

export default ConstructorIngredient;
