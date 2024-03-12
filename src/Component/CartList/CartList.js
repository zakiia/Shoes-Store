import React from "react";

const CartList = (props) => {
  const { cartList } = props;

  return (
    <span>
      <ul>
        {cartList.map((list) => (
          <li key={list.id}>{list.name}</li>
        ))}
      </ul>
    </span>
  );
};

export default CartList;
