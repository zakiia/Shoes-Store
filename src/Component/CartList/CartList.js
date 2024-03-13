import React from "react";
import "./CartList.css";

const CartList = (props) => {
  console.log(props);
  const { cartList } = props;

  return (
    <span>
      <ul>
        {cartList.map((list) => (
          <li key={list.id}>{list.name}</li>
        ))}
      </ul>
      <button className="btn">Choose One</button>
    </span>
  );
};

export default CartList;
