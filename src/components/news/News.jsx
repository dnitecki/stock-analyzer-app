import React from "react";
import "./News.scss";
export default function News({ news, name }) {
  return (
    <div className="card">
      <div className="news-header">
        <i className="pi pi-globe news-icon" />
        News related to {name}
      </div>
      <div className="news-card">
        {news.map((item, index) => (
          <div className="news-card-item" key={index}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <div className="news-content">
                <div className="news-headline">{item?.headline}</div>
                <img
                  className="news-image img"
                  title={item.headline}
                  src={item.image}
                  alt=""
                ></img>
                <div className="link">{item.source}</div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
