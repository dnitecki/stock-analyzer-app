import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.scss";
import Header from "../../components/header/Header";
// import { mockCompanyDetails } from "../../constants/mock";
import Details from "../../components/details/Details";
import Overview from "../../components/overview/Overview";
import Chart from "../../components/chart/Chart";
import StockContext from "../../components/context/StockContext";
import { fetchQuote, fetchStockDetails } from "../../api/stock-api";

export default function Dashboard() {
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const updateStockDetails = async () => {
      try {
        const result = await fetchStockDetails(stockSymbol);
        setStockDetails(result);
      } catch (error) {
        setStockDetails({});
        console.log(error);
      }
    };
    const updateStockOverview = async () => {
      try {
        const result = await fetchQuote(stockSymbol);
        setQuote(result);
      } catch (error) {
        setQuote({});
        console.log(error);
      }
    };

    updateStockDetails();
    updateStockOverview();
  }, [stockSymbol]);
  return (
    <div>
      <div className="dashboard">
        <div className="dashboard-header">
          <Header
            logo={stockDetails.logo}
            name={stockDetails.name}
            ticker={stockSymbol}
          />
        </div>
        <div className="dashboard-chart">
          <Chart />
        </div>
        <div className="dashboard-overview">
          <Overview
            symbol={stockSymbol}
            price={quote.c}
            change={quote.d}
            changePercent={quote.dp}
            currency={stockDetails.currency}
          />
        </div>
        <div className="dashboard-details">
          <Details details={stockDetails} />
        </div>
      </div>
    </div>
  );
}
