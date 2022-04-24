import React from "react";
import "./Details.scss";

export default function Details({ details }) {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };
  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };
  return (
    <div className="card">
      <div className="details-header">Company Info</div>
      <div className="detailsList-container">
        <ul className="detailsList">
          {Object.keys(detailsList).map((item) => {
            return (
              <li className="detailsItem" key={item}>
                <div className="details">
                  <span className="item">{detailsList[item]}</span>
                  <span className="info">
                    {item === "marketCapitalization"
                      ? `${convertMillionToBillion(details[item])}B`
                      : details[item]}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
