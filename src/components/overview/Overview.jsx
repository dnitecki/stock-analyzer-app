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
          <span className="price">${price}</span>
          <span className="currency">{currency}</span>
        </span>
        <span className="overview-change">
          {change > 0 ? (
            <i className="pi pi-caret-up" />
          ) : (
            <i className="pi pi-caret-down" />
          )}
          ${change}
          <span className={change > 0 ? "green" : "red"}>
            ({changePercent}%)
          </span>
        </span>
      </div>
    </Card>
  );
}
