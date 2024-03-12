import React from "react";
import "./Cart.css";
import CartList from "../CartList/CartList";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h3>Order summery</h3>
      <p>Selected Items:</p>
      <CartList cartList={cart.length ? cart : []}></CartList>
    </div>
  );
};

export default Cart;
