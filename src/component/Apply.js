import React from "react";
import Data from "./Data/Data";
import List from "./Card";
import "./Style/card.css";

const Card = ({ handleClick }) => {
  return (
    <div>
      <h2 style={{ marginTop: "1rem", paddingTop: "10px" }}>ElvinaShop's simple system of shopping cart, made by React</h2>
      <div className="container container_main">
        {Data.map((item) => (
          <List key={item.id} item={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Card;
