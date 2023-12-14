import styles from './burger-constructor.module.css';
import ConstructorContent from './constructor-content/constructor-content';
import ConstructorMakeOrder from './constructor-make-order/constructor-make-order';
import PropTypes from 'prop-types';

const BurgerConstructor = ({ data }) => {
  return (
    <section className={`${styles.section} pt-25 pl-4 `}>
      <ConstructorContent data={data} />
      <ConstructorMakeOrder />
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.array.isRequired,
};

export default BurgerConstructor;
