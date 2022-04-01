import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.scss";
import Header from "../../components/header/Header";
// import { mockCompanyDetails } from "../../constants/mock";
import Details from "../../components/details/Details";
import Overview from "../../components/overview/Overview";
import Chart from "../../components/chart/Chart";
import News from "../../components/news/News";
import StockContext from "../../components/context/StockContext";
import {
  fetchQuote,
  fetchStockDetails,
  fetchStockNews,
  fetchSP500,
  fetchStockFundamentals,
  fetchStockFinancials,
  fetchDetailedStockQuote,
} from "../../api/stock-api";
import StatsCard from "../../components/statsCard/StatsCard";

export default function Dashboard() {
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  const [news, setNews] = useState([]);
  const [sp500, setSp500] = useState({});
  const [fundamentals, setFundamentals] = useState({});
  const [financials, setFinancials] = useState({});
  const [detailedQuote, setDetailedQuote] = useState({});

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
    const updateStockNews = async () => {
      try {
        const result = await fetchStockNews(stockSymbol);
        setNews(result);
      } catch (error) {
        setNews([]);
        console.log(error);
      }
    };
    const getSP500 = async () => {
      try {
        const result = await fetchSP500();
        setSp500(result);
      } catch (error) {
        setSp500({});
        console.log(error);
      }
    };
    const updateStockFundamentals = async () => {
      try {
        const result = await fetchStockFundamentals(stockSymbol);
        setFundamentals(result);
      } catch (error) {
        setFundamentals({});
        console.log(error);
      }
    };
    const updateStockFinancials = async () => {
      try {
        const result = await fetchStockFinancials(stockSymbol);
        setFinancials(result);
      } catch (error) {
        setFinancials({});
        console.log(error);
      }
    };
    const updateDetailedStockQuote = async () => {
      try {
        const result = await fetchDetailedStockQuote(stockSymbol);
        setDetailedQuote(result);
      } catch (error) {
        setDetailedQuote({});
        console.log(error);
      }
    };
    updateStockNews();
    updateStockDetails();
    updateStockOverview();
    updateDetailedStockQuote();
    // updateStockFinancials(); //Removed to not use requests
    // getSP500();  //Removed to not use requests
    // updateStockFundamentals(); //Removed to not use requests
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
          <StatsCard details={stockDetails} stats={detailedQuote} />
        </div>
        <div className="dashboard-news">
          <News news={news} name={stockDetails.name} />
        </div>
      </div>
    </div>
  );
}
