import React from "react";
import "./Style/card.css";

const Rows = ({ item, handleClick }) => {
  const { price, category, title, img } = item;

  const containerCard = {
    maxWidth: "1200px",
    display: "flex",
  }

  return (
    <div className="container_card" style={containerCard}>
      <div className="coba" style={{ paddingTop: "20px" }}>
        <div className="real_content">
          <div className="img_box" style={{ paddingRight: "10px" }}>
            <img src={img} />
          </div>
          <div>
            <h1>{title}</h1>
            <p>{category}</p>
            <h3>$ {price}</h3>
            <button onClick={() => handleClick(item)} className="cart_btn">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rows;
