import React from "react";
import "./CoinItem.css";

const CoinItem = ({
  _id,
  id,
  purchDate,
  symbol,
  name,
  baseCurrency,
  price,
  amount,
  total,
  removeCoin
}) => (
  <div id="crypto-container">
    <span className="left">{symbol}</span>
    <span>{name}</span>
    <span>
      <button onClick={removeCoin}>X</button>
    </span>
  </div>
);

export default CoinItem;
