import React, { useContext } from "react";
import "./cart.css";
import { Context } from "../../App";

const Cart = () => {
  const { cart, setCart } = useContext(Context);

  function removeFromCart(id){
    setCart(cart.filter((ele) => {
      return ele.id !== id
    }))
  }
  return (
    <>
    <h1 style={{color:"green",textAlign:"center",margin:"10px"}}>Cart</h1>
    <div className="mainCartcontainer">
      {cart.length > 0 ? <>{cart.map((ele) => {
        return (
          <div className="cart">
            <img src={ele.image} alt="" />
            <p>Price: {(ele.price * 82.13).toFixed(2)} ₹</p>
            <p>category: {ele.category}</p>
            <button onClick={() => {
              removeFromCart(ele.id)
            }}>Remove From Cart</button>
          </div>
        )
      })}</> : <h1>Cart Is Empty</h1>}
    </div>
    </>
  );
};

export default Cart;
