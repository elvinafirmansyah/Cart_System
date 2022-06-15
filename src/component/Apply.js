import React from "react";
import Data from "./Data/Data";
import List from "./Card";
import "./Style/card.css";

const Card = ({ handleClick }) => {
  return (
    <div className="container container_main">
      {Data.map((item) => (
        <List key={item.id} item={item} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Card;
