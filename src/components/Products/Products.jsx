import React, { useState, useEffect } from "react";

import style from "./products.module.css";
import axios from "axios";
import {Product} from "./Product";

const Products = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    axios.get("https://rct-101-c4.herokuapp.com/products").then((res) => {
      setItem(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className={style.products}>
      {item.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
     
    </div>
  );
};

export default Products;
