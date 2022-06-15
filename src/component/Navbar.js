import React from "react";
import "./Style/navbar.css";

const Navbar = ({ setShow, size }) => {
  const logo =
    "https://www.freepnglogos.com/uploads/e-logo-transparent-png-20.png";
  const cartLogo =
    "https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png";
  return (
    <nav>
      <div className="nav-brand" onClick={() => setShow(true)}>
        <img src={logo} />
      </div>
      <div className="cart" onClick={() => setShow(false)}>
        <img src={cartLogo} />
        <p>{size}</p>
      </div>
    </nav>
  );
};

export default Navbar;
