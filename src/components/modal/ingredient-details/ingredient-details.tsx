import styles from './ingredient-details.module.css';
import { IngredientDetail } from '../../../utils/constants';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from '../../../hooks';
import { fetchAllIngredients } from '../../../services/selectors';

const IngredientDetails = () => {
  const location = useLocation();
  const ingredient = location.state?.ingredient;
  const { ingredients } = useSelector(fetchAllIngredients);

  const { id } = useParams();
  const [ingredientData, setIngredientData] = useState(ingredient);

  useEffect(() => {
    if (ingredient) {
      setIngredientData(ingredient);
    } else if (ingredients.length) {
      setIngredientData(ingredients.find((item: any) => item.info._id === id).info);
    }
  }, [id, ingredient, ingredients]);

  return (
    ingredientData && (
      <>
        <h2 className="mt-10 pt-3 pl-10 pr-10 text text_type_main-large">Детали ингредиента</h2>
        <img
          className="mb-4"
          width={480}
          height={240}
          src={ingredientData.image_large}
          alt={ingredientData.name}
        />
        <h3 className="text text_type_main-medium mb-8">{ingredientData.name}</h3>
        <div className={`${styles.details} mb-15 text text_type_main-default text_color_inactive`}>
          {IngredientDetail.map((item) => (
            <div key={item.id} className={`${styles.detail} mr-5`}>
              <div className={styles.key}>{item.key}</div>
              <div className={styles.value}>{ingredientData[item.value]}</div>
            </div>
          ))}
        </div>
      </>
    )
  );
};

export default IngredientDetails;
