import React, { useContext, useState, useEffect } from "react";
import StockContext from "../context/StockContext";
import "./News.scss";
import { fetchStockNews } from "../../api/stock-api";
export default function News(category, headline) {
  return (
    <div className="card">
      <div>{/* {category}?{headline}? */}</div>
    </div>
  );
}
