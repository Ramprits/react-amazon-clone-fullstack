import React from "react";
import CurrencyFormat from "react-currency-format";
import "../styles/subTotal.css";
import { useStateValue } from "../state/stateProvider";

export const SubTotal = () => {
  const [{ basket }] = useStateValue();
  console.log("checkout ==>", basket);
  const totalPrice = () =>
    basket.reduce((sum, item) => sum + parseFloat(item.price), 0);

  console.log("total", totalPrice());
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{totalPrice()}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      ></CurrencyFormat>
      <button>Proceed to Check out</button>
    </div>
  );
};
