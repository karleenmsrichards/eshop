import "./App.css";
import "./Product.css";

export const Product = ({ title, price, rating, image }) => {
  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img className="product-image" src={image} alt="" />

      <button className="product-btn">Add to Basket</button>
    </div>
  );
};
