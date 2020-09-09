import React from "react";
import "../styles/checkout.css";
import { SubTotal } from "../Components/subTotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://res.cloudinary.com/rps-technologies/image/upload/v1599631659/640x45._CB445198997_.jpg"
          className="checkout__ad"
          alt="add"
        ></img>
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
