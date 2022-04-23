import React from "react";
import "./Overview.scss";
import { useState } from "react";

export default function Overview({
  symbol,
  price,
  change,
  changePercent,
  currency,
}) {
  const [active, setActive] = useState(false);
  const clicked = () => {
    setActive(!active);
  };
  return (
    <div className="card">
      <div className="overview">
        <span className="overview-header">{symbol}</span>
        <span className="overview-price">
          <span className="price">${price?.toFixed(2)}</span>
          <span className="currency">{currency}</span>
        </span>
        <span className="overview-change">
          {active ? (
            <button onClick={clicked} className={change > 0 ? "green" : "red"}>
              $ {change?.toFixed(2)}
            </button>
          ) : (
            <button onClick={clicked} className={change > 0 ? "green" : "red"}>
              {changePercent?.toFixed(2)} %
            </button>
          )}
          {/* {change > 0 ? (
            <i className="pi pi-caret-up green" />
          ) : (
            <i className="pi pi-caret-down red" />
          )}
          <span className={change > 0 ? "green" : "red"}>
            ${change?.toFixed(2)}
          </span>
          <span>({changePercent?.toFixed(2)}%)</span> */}
        </span>
      </div>
    </div>
  );
}
