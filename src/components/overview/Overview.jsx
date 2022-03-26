import React from "react";
import "./Overview.scss";
import Card from "../card/Card.jsx";

export default function Overview({
  symbol,
  price,
  change,
  changePercent,
  currency,
}) {
  return (
    <Card>
      <span>{symbol}</span>
      <div>
        <span>
          ${price}
          <span>{currency}</span>
        </span>
        <span className={change > 0 ? "green" : "red"}>
          {change}
          <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
}
