import React, { useContext, useState, useEffect } from "react";
import style from "./CartPage.module.css";
import { CartContext } from "../../context/CartContext";
const CartPage = ({ id,name,description}) =>{
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
  }, [id, getCartItemCountByProductId]);

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
      <div>
      {count === 0 ? (
      <h1></h1>
      ) : (
        <div>
          <button
          
            onClick={() => handleUpdate(count + 1)}
          >
            +
          </button>
          <span>{count}</span>
          <button
            onClick={() => handleUpdate(count - 1)}
          >
            -
          </button>
          <button
            
            onClick={handleDelete}
          >
            Remove
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default CartPage;
