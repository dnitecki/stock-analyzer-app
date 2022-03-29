import React from "react";
import "./Details.scss";
import { TabView, TabPanel } from "primereact/tabview";

export default function Details({ details }) {
  const detailsList = {
    name: "Name",
    country: "Country",
    currency: "Currency",
    exchange: "Exchange",
    ipo: "IPO Date",
    marketCapitalization: "Market Capitalization",
    finnhubIndustry: "Industry",
  };
  const convertMillionToBillion = (number) => {
    return (number / 1000).toFixed(2);
  };
  return (
    <div className="card">
      <TabView>
        <TabPanel header="Details">
          <ul className="detailsList">
            {Object.keys(detailsList).map((item) => {
              return (
                <li className="detailsItem" key={item}>
                  <div className="details">
                    <span>{detailsList[item]}</span>
                    <span>
                      {item === "marketCapitalization"
                        ? `${convertMillionToBillion(details[item])}B`
                        : details[item]}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </TabPanel>
        <TabPanel header="Header"></TabPanel>
        <TabPanel header="Header"></TabPanel>
        <TabPanel header="Header"></TabPanel>
      </TabView>
    </div>
  );
}
