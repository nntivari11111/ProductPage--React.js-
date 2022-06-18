import React, { useState, useEffect } from "react";

import style from "./CartPages.module.css";
import axios from "axios";
import CartPage from "./cartpage/CartPage";

const CartPages = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/cartItems").then((res) => {
      setItem(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Cart Items</h1>
      <div className={style.products}>
      {item.map((item) => (
          <CartPage key={item.id} {...item} />
        ))}
      </div>
     
    </div>
  );
};

export default CartPages;
