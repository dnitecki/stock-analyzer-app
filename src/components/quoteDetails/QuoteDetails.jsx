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
    <div className="card">
      <div className="details-container">
        <div className="quoteDetailsList">
          <div className="left-column">
            <div className="quoteDetail">
              <span className="quoteItem">Open</span>
              <span className="quoteStat">$ {stats.iexOpen}</span>
            </div>
            <div className="quoteDetail">
              <span className="quoteItem">52 Week High</span>
              <span className="quoteStat">$ {stats.week52High}</span>
            </div>
            <div className="quoteDetail">
              <span className="quoteItem">52 Week Low</span>
              <span className="quoteStat">$ {stats.week52Low}</span>
            </div>
          </div>
          <div className="right-column">
            <div className="quoteDetail">
              <span className="quoteItem">P/E</span>
              <span className="quoteStat">{stats.peRatio}</span>
            </div>
            <div className="quoteDetail">
              <span className="quoteItem">Volume</span>
              <span className="quoteStat">{stats.iexVolume}</span>
            </div>
            <div className="quoteDetail">
              <span className="quoteItem">Avg. Volume</span>
              <span className="quoteStat">{stats.avgTotalVolume}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
