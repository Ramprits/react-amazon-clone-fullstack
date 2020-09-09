import React from "react";
import "../styles/product.css";

const Product = ({ title, price, rating, imgUrl }) => {
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
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
