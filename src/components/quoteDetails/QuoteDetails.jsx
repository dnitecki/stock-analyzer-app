import React from "react";
import "./QuoteDetails.scss";

export default function QuoteDetails({ stats }) {
  const QuoteDetailsList = {
    iexOpen: "Open",
    week52High: "52 Week High",
    week52Low: "52 Week Low",
    peRatio: "P/E Ratio",
    iexVolume: "Volume",
    avgTotalVolume: "Average Volume",
  };

  return (
    <ul className="detailsList">
      {Object.keys(QuoteDetailsList).map((item) => {
        return (
          <li className="detailsItem" key={item}>
            <div className="details">
              <span>{QuoteDetailsList[item]}</span>
              <span>{stats[item]}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
