import React from "react";
import CurrencyFormat from "react-currency-format";
import "../styles/subTotal.css";

export const SubTotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal (0 items): <strong>0</strong>
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
