import React from "react";
import "./StatsCard.scss";
import { TabView, TabPanel } from "primereact/tabview";
import Details from "../details/Details";
import QuoteDetails from "../quoteDetails/QuoteDetails";

export default function StatsCard({ details, stats }) {
  return (
    <div className="card">
      <TabView>
        <TabPanel header="Quote Details" contentClassName="panel-card">
          <div className="panel-overflow">
            <QuoteDetails stats={stats} />
          </div>
        </TabPanel>
        <TabPanel header="Equity Info" contentClassName="panel-card">
          <div className="panel-overflow">
            <Details details={details} />
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
}
