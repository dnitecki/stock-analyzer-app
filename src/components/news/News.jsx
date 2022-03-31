import React from "react";
import "./News.scss";
export default function News({ news }) {
  return (
    <div className="card">
      {/* <div>News</div> */}
      <div className="container">
        {news.map((item) => (
          <div className="card-news" key={item}>
            <div className="news-content">
              <div className="news-headline">{item?.headline}</div>
              <img
                className="news-image"
                src={item.image}
                alt={item.source}
              ></img>
              <div className="link"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
