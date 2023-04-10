import "./App.css";
import "./Checkout.css";
import { CheckoutProduct } from "./CheckoutProduct";
import { Subtotal } from "./Subtotal";

export const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout advertisement"
        />
        <div>
          <h2 className="checkout-title">Your Shopping Basket</h2>
          <CheckoutProduct
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
            price={11.96}
            rating={3}
          />
          <CheckoutProduct
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
            price={11.96}
            rating={3}
          />
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
};
