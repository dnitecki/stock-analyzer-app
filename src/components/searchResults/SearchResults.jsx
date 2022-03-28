import React, { useContext } from "react";
import StockContext from "../context/StockContext";
import "./SearchResults.scss";

export default function SearchResults({ results }) {
  const { setStockSymbol } = useContext(StockContext);
  return (
    <ul className="resultsList">
      {results.map((item) => {
        return (
          <li
            key={item.symbol}
            className="resultsItem"
            onClick={() => {
              setStockSymbol(item.symbol);
            }}
          >
            <div className="results">
              <span>{item.symbol}</span>
              <span>{item.description}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
