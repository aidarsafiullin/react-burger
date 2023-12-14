import IngredientsItem from '../ingredients-item/ingredients-item';
import styles from './ingredients-menu.module.css';

const IngredientsMenu = ({ data, filter, IngredientTypes }) => {
  return (
    <section className={`${styles.section} mt-10`}>
      {filter.map((type, id) => {
        return (
          <div key={id} className={`${styles['ingredient-type']} mb-10`}>
            <h2 className="text text_type_main-medium mb-6">{IngredientTypes[type]}</h2>
            <div className={`${styles['ingredient-type-wrapper']} pl-4 pr-4`}>
              {data.map((item) => {
                if (item.type === type) {
                  return <IngredientsItem key={item._id} item={item} />;
                }
              })}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default IngredientsMenu;
