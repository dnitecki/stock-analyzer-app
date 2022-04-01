import React from "react";
import "./StatsCard.scss";
import { TabView, TabPanel } from "primereact/tabview";
import { ScrollPanel } from "primereact/scrollpanel";
import Details from "../details/Details";
import QuoteDetails from "../quoteDetails/QuoteDetails";

export default function StatsCard({ details, stats }) {
  return (
    <div className="card">
      <TabView>
        <TabPanel header="Quote Details" ContentclassName="panel-card">
          <div>
            <QuoteDetails stats={stats} />
          </div>
        </TabPanel>
        <TabPanel header="Equity Info" contentClassName="panel-card">
          <Details details={details} />
        </TabPanel>
      </TabView>
    </div>
  );
}
