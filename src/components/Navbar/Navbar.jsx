import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import style from "./navbar.module.css";
const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const { cartItemsCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLoginClick = () => {
    
    if (isAuth) {
      logout();
    } else {
      navigate("/login");
    }
  };
  return (
    <div data-cy="navbar"  className={style.main} >
      <div className={style.down} >
        <Link data-cy="navbar-home-link" to="/">
          Logo
        </Link>
      </div>
      <div  className={style.down}>
        <div data-cy="navbar-cart-items-count">
          Cart: {cartItemsCount && `(${cartItemsCount})`}
        </div>
        <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
