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
      <div className="overview">
        <span className="overview-header">{symbol}</span>
        <span className="overview-price">
          ${price}
          <span>{currency}</span>
        </span>
        <span className={`overview-change ${change > 0 ? "green" : "red"}`}>
          {change}
          <span>({changePercent}%)</span>
        </span>
      </div>
    </Card>
  );
}
