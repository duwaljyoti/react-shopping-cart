import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import {useSelector} from "react-redux";
const Layout = () => {
  const shouldShowCart = useSelector((state) => state.cart.showCart)
  const cartItems = useSelector((state) => state.cart.itemsList)
  console.log(cartItems)
  const totalPrice = cartItems.reduce((accumulator, iterator ) => iterator.totalPrice + accumulator, 0);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { shouldShowCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
