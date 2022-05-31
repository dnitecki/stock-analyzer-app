import React, { useContext, useEffect, useState } from "react";
import "./Dashboard.scss";
import Header from "../../components/header/Header";
// import { mockCompanyDetails } from "../../constants/mock";
import Overview from "../../components/overview/Overview";
import Chart from "../../components/chart/Chart";
import News from "../../components/news/News";
import StockContext from "../../components/context/StockContext";
import {
  fetchQuote,
  fetchStockDetails,
  fetchStockNews,
  fetchDetailedStockQuote,
} from "../../api/stock-api";
import QuoteDetails from "../../components/quoteDetails/QuoteDetails";
import Details from "../../components/details/Details";

export default function Dashboard() {
  const { stockSymbol } = useContext(StockContext);
  const [stockDetails, setStockDetails] = useState({});
  const [quote, setQuote] = useState({});
  const [news, setNews] = useState([]);
  const [detailedQuote, setDetailedQuote] = useState({});

  // grab data from local storage on render
  /*
  useEffect(() => {
    const data1 = localStorage.getItem("detailedStockQuote");
    if (data1 != null) setDetailedQuote(JSON.parse(data1));
    const data2 = localStorage.getItem("stockNews");
    if (data2 != null) setNews(JSON.parse(data2));
    const data3 = localStorage.getItem("quote");
    if (data3 != null) setQuote(JSON.parse(data3));
    const data4 = localStorage.getItem("stockDetails");
    if (data4 != null) setStockDetails(JSON.parse(data4));
  }, []);
  */

  // fetch data when stockSymbol Changes
  useEffect(() => {

    if (!stockSymbol) return;

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
        <div className="dashboard-info">
          <QuoteDetails stats={detailedQuote} />
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
        <div className="dashboard-news">
          <News news={news} name={stockDetails.name} />
        </div>
        <div className="dashboard-rating">
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
}
