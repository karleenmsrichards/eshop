import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

export const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderTExt={(value) => {
          <>
            <p>
              Subtotal (0 items): <strong>$0</strong>
            </p>
            <small className="total-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>;
        }}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        // prefix={}
      />
    </div>
  );
};
