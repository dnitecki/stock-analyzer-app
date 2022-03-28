import React from "react";
import "./Dashboard.scss";

import Header from "../../components/header/Header";
import { mockCompanyDetails } from "../../constants/mock";
import Details from "../../components/details/Details";
import Overview from "../../components/overview/Overview";
import Chart from "../../components/chart/Chart";

export default function Dashboard() {
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-header">
          <Header
            name={mockCompanyDetails.name}
            ticker={mockCompanyDetails.ticker}
          />
        </div>
        <div className="dashboard-chart">
          <Chart />
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
