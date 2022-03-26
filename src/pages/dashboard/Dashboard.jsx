import React from "react";
import "./Dashboard.scss";
import Card from "../../components/card/Card";

export default function Dashboard() {
  return (
    <div className="body">
      <div className="dashboard">
        <div className="header">
          <Card>Header</Card>
        </div>
        <div className="chart">
          <Card>Chart</Card>
        </div>
        <div className="overview">
          <Card>Overview</Card>
        </div>
        <div className="details">
          <Card>Details</Card>
        </div>
      </div>
    </div>
  );
}
