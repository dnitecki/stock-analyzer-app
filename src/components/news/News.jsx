import React from "react";
import "./News.scss";
export default function News({ news, name }) {
  return (
    <div className="card">
      <div className="news-header">News related to {name}</div>
      <div className="news-card">
        {news.map((item) => (
          <div className="card-news" key={item}>
            <div className="news-content">
              <div className="news-headline">{item?.headline}</div>
              <img
                className="news-image img"
                title={item.headline}
                src={item.image}
                alt=""
              ></img>
              <div className="link"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
