import React from "react";
import "./SearchResults.scss";

export default function SearchResults({ results }) {
  return (
    <ul className="resultsList">
      {results.map((item) => {
        return (
          <li key={item.symbol} className="resultsItem">
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