import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";
const ProductList = () => {
  return (
    <div className="pl">
      <div className="p1-texts">
        <h1 className="p1-title">Create & inspire. It's Ankit</h1>
        <p className="p1-desc">
          Ankit is a creative that works has been waiting for beatiful
          homes,stunning potfolio styles & a whole lot more awaits inside.
        </p>
      </div>
      <div className="p1-lists">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
