import styles from './burger-constructor.module.css';
import ConstructorContent from './constructor-content/constructor-content';
import ConstructorMakeOrder from './constructor-make-order/constructor-make-order';

const BurgerConstructor = ({ data }) => {
  return (
    <section className={`${styles.section} pt-25 pl-4 `}>
      <ConstructorContent data={data} />
      <ConstructorMakeOrder />
    </section>
  );
};

export default BurgerConstructor;
