import React, { useContext, useState, useEffect } from "react";
import style from "./product.module.css";
import { CartContext } from "../../../context/CartContext";
const Product = ({ id, name,description}) => {
  const {
    getCartItemCountByProductId,
    addItemToCart,
    removeItemFromCart,
    updateItemCount,
  } = useContext(CartContext);
  const [count, setCount] = useState(0);

  const handleUpdate = async (newCount) => {
    await updateItemCount(id,newCount);
    setCount(newCount);
  };

  const handleDelete = async () => {
    await removeItemFromCart(id);
    setCount(0);
  };

  useEffect(() => {
    if (id) {
      setCount(getCartItemCountByProductId(id));
    }
  }, [id,getCartItemCountByProductId]);

  return (
    <div
     
      className={style.product}
    >
      <div>
      <h3 >{name}</h3>
      <h6 >{description}</h6>
      <button
         
         onClick={() => {
           addItemToCart({
             productId: id,
             name:name,
             description:description,
             count: 1,
           });
         }}
       >
         Add
       </button>
       
      </div> 
    </div>
  );
};

export default Product;
