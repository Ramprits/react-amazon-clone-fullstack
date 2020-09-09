import React from "react";
import "../styles/product.css";
import { useStateValue } from "../state/stateProvider";
import { ADD_TO_BASKET } from "../state/reducer";

const Product = ({ title, price, rating, imgUrl }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: { title, price, rating, imgUrl },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{parseFloat(price)}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>
                <span role="img" aria-label="star">
                  🌟
                </span>
              </p>
            ))}
        </div>
      </div>
      <img src={imgUrl} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
};

export default Product;
