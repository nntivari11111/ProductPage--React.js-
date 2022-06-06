import React from "react";
import { Products } from "../components/Products";
import style from "./home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <Products />
    </div>
  );
};

export default Home;
