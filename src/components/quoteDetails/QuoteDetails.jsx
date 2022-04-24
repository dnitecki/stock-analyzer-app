import React from "react";
import "./QuoteDetails.scss";

export default function QuoteDetails({ stats }) {
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
            <div className="quoteDetail-last">
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
            <div className="quoteDetail-last">
              <span className="quoteItem">Avg. Volume</span>
              <span className="quoteStat">{stats.avgTotalVolume}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
