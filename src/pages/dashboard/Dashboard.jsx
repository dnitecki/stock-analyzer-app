import React from "react";
import "./Dashboard.scss";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { mockCompanyDetails } from "../../constants/mock";
import Details from "../../components/details/Details";
import Overview from "../../components/overview/Overview";

export default function Dashboard() {
  return (
    <div className="body">
      <div className="dashboard">
        <div className="dashboard-header">
          <Header name={mockCompanyDetails.name} />
        </div>
        <div className="dashboard-chart">
          <Card>Chart</Card>
        </div>
        <div className="dashboard-overview">
          <Overview
            symbol={mockCompanyDetails.ticker}
            price={300}
            change={30}
            changePercent={10.0}
            currency={"USD"}
          />
        </div>
        <div className="dashboard-details">
          <Details details={mockCompanyDetails} />
        </div>
      </div>
    </div>
  );
}
