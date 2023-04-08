import "./App.css";
import "./Header.css";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate(null);
  return (
    <header>
      <div className="header-logo-wrapper" onClick={() => navigate("/")}>
        <StorefrontIcon fontSize="large" className="header-logo-image" />
        <h2 className="header-logo-title">eSHOP</h2>
      </div>
      <div className="header-search-wrapper">
        <input
          className="header-search-input"
          type="text"
          name="header-search-input"
        />
        <SearchIcon className="header-search-icon" fontSize="large" />
      </div>
      <nav className="header-nav-wrapper">
        <div className="header-nav-item-column">
          <span className="header-nav-item-line1">Hello Guest</span>
          <span className="header-nav-item-line2">Sign In</span>
        </div>

        <div className="header-nav-item-column">
          <span className="header-nav-item-line1">Your</span>
          <span className="header-nav-item-line2">Shop</span>
        </div>
        <div
          className="header-nav-item-row"
          onClick={() => navigate("/checkout")}
        >
          <ShoppingBasketIcon fontSize="medium" className="item-backet" />
          <span className="header-nav-item-line2 header-basket-count">0</span>
        </div>
      </nav>
    </header>
  );
};
