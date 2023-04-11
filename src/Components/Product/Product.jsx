import React, { useContext, useEffect, useState } from "react";
import "./product.css";
import { Context } from "../../App";

const Product = () => {
  const {cart, setCart} = useContext(Context);
  const [apiRes, setApiRes] = useState([]);
  useEffect(() => {
    apiData();
  }, []);

  async function apiData() {
    const api = await fetch("https://fakestoreapi.com/products");
    const res = await api.text();
    const jsonData = JSON.parse(res);
    setApiRes(jsonData);
  }

  return (
    <>
        <h1 style={{color:"coral",textAlign:"center",margin:"10px"}}>Products</h1>
    <div className="product">

      {apiRes.length > 0 ? (
        <>
          {apiRes.map((ele) => {
            return (
              <div className="card">
              <img src={ele.image} alt=""/>
              <p>Price: {(ele.price * 82.13).toFixed(1)} ₹</p>
              <p>Category: {ele.category}</p>
              <button onClick={() => {
                setCart([...cart,ele]);
              }}>Add To Cart</button>
              </div>
            )
          })}
        </>
      ) 
      : 
      (
        <h1>Please Wait While Page Is Loading !!! <i class="fa-solid fa-spinner fa-spin-pulse"></i></h1>
      )}
    </div>
    </>
  );
};

export default Product;
