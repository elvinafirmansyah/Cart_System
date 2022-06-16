import "./styles.css";
import React, { useState } from "react";
import Apply from "./component/Apply";
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const index = cart.indexOf(item);
    const addCart = cart;
    addCart[index].total += d;

    if (addCart[index].total === 0) addCart[index].total = 1;
    setCart([...addCart]);
  };

  return (
    <div className="app">
      <Navbar setShow={setShow} size={cart.length} />
      <div className="content">
        {show ? (
          <Apply handleClick={handleClick} />
        ) : (
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
        )}
      </div>
    </div>
  );
};

export default App;
