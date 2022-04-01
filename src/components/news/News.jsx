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
              {/* <object className="news-image" data={item.image} type="image"> */}
              <img
                className="news-image img"
                title={item.headline}
                src={item.image}
                alt=""
              ></img>
              {/* </object> */}

              <div className="link"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
