import React from "react";
import "./Dashboard.scss";
import Card from "../../components/card/Card";
import Header from "../../components/header/Header";
import { mockCompanyDetails } from "../../constants/mock";
import Details from "../../components/details/Details";

export default function Dashboard() {
  return (
    <div className="body">
      <div className="dashboard">
        <div className="header">
          <Header name={mockCompanyDetails.name} />
        </div>
        <div className="chart">
          <Card>Chart</Card>
        </div>
        <div className="overview">
          <Card>Overview</Card>
        </div>
        <div className="details">
          <Details details={mockCompanyDetails} />
        </div>
      </div>
    </div>
  );
}
