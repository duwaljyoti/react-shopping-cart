import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import {useSelector} from "react-redux";

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.itemsList)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {
          cartItems.map((singleItem) => (
            <li key={singleItem.id}>
              <CartItem
                id={singleItem.id}
                price={singleItem.price}
                name={singleItem.name}
                quantity={singleItem.quantity}
                total={singleItem.totalPrice}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default CartItems;
