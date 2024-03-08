import React from "react";
import { useCart } from "../CardContext/CardContext";
import "./Cart.css"; 

const Cart = () => {
  const { cart } = useCart();
    console.log(cart);
  return (
    <>
      <h2>Your Cart</h2>
      <div className="cart-container">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="item-details">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-image"
                  />
                  <strong>{item.title}</strong>
                  <span>Price: ${item.price}</span>
                  <span>Quantity: {item.quantity || 1}</span>
                  <span>Category: {item.category}</span>
                  <span>Description: {item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Cart;
