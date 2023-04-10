import "./CheckoutProduct.css";
import "./Product.css";

export const CheckoutProduct = ({ image, title, price, rating }) => {
  return (
    <div className="checkout-product">
      <div className="checkout-product-image-wrapper">
        <img className="checkout-product-image" src={image} alt="" />
      </div>
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
        <button className="product-btn">Remove from Basket</button>
      </div>
    </div>
  );
};
