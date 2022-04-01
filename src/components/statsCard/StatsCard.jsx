import React from "react";
import "./StatsCard.scss";
import { TabView, TabPanel } from "primereact/tabview";
import Details from "../details/Details";
import QuoteDetails from "../quoteDetails/QuoteDetails";

export default function StatsCard({ details, stats }) {
  return (
    <div className="card">
      <TabView>
        <TabPanel header="Quote Details">
          <QuoteDetails stats={stats} />
        </TabPanel>
        <TabPanel header="Equity Info">
          <Details details={details} />
        </TabPanel>
      </TabView>
    </div>
  );
}
