import React from "react";
import "./ChartFilter.scss";

export default function ChartFilter({ text, active, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`filter-button ${active ? "active" : "inactive"}`}
      >
        {text}
      </button>
    </div>
  );
}
