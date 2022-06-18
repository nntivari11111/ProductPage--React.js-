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
    <div className={style.main} >
     
      <div className={style.down} >
      <h3>Navbar</h3>
        <Link  to="/">
         Home
        </Link>
        <button  onClick={handleLoginClick}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
      <div >
        <div >
        <Link  to="/cart"> Cart: {cartItemsCount && `(${cartItemsCount})`} </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
