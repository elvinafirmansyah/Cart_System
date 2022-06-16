import React, { useState, useEffect } from "react";
import "./Style/cart.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const clearAll = () => {
    setCart([])
  }
  const handleRemove = (id) => {
    const hilang = cart.filter((item) => item.id !== id);
    setCart(hilang);
  };

  const handlePrice = () => {
    let zero = 0;
    cart.map((item) => (zero += item.total * item.price));
    setPrice(zero);
  };

  useEffect(() => {
    handlePrice();
  });

  const spanStyle = {
    padding: "0 1rem",
    fontWeight: "bold"
  };

  function refreshPage() {
    window.location.reload();
  }
  return (
    <div className="content_container">
      <p style={{ marginBottom: "0.4rem" }}>
        You have <span style={{ fontWeight: "bold" }}>{cart.length} items</span>{" "}
        in this cart
      </p>
      <button onClick={refreshPage}>relog</button>
      <div className="main_content">
        {cart.map((item) => (
          <div className="contentfull">
            <div className="img_box" style={{ paddingRight: "1rem" }}>
              <img src={item.img} />
            </div>
            <div className="item-text">
              <h2>{item.title}</h2>
              <h5>{item.category}</h5>
              <h1>$ {item.price}</h1>
              <button
                onClick={() => handleRemove(item.id)}
                className="remove_btn"
              >
                Remove
              </button>
              <div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <span> {item.total} </span>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="clear-section">
        <button onClick={() => clearAll()} className="clear_btn">
          clear
        </button>
      </div>
      <div className="total" style={{ display: "flex" }}>
        <span>Total Price of your Cart</span>
        <span style={spanStyle} className="price">$ {price}</span>
      </div>
    </div>
  );
};

export default Cart;
