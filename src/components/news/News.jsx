import React, { useContext, useState, useEffect } from "react";
import "./News.scss";
export default function News({ news }) {
  return (
    <div className="card">
      {news.map((item) => (
        <div className="card-news" key={item}>
          {item.headline}
        </div>
      ))}
    </div>
  );
}
