import "./app.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Watchlist from "./pages/watchlist/Watchlist";
import ReportBug from "./pages/reportBug/ReportBug";
import "primeicons/primeicons.css";
import { useState } from "react";
import StockContext from "./components/context/StockContext";

function App() {
  const location = useLocation();
  const [stockSymbol, setStockSymbol] = useState("FB");
  return (
    <div className="app">
      <div>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <Routes location={location} key={location.pathname}>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/watchlist" element={<Watchlist />} />
            <Route exact path="/reportbug" element={<ReportBug />} />
          </Routes>
        </StockContext.Provider>
      </div>
    </div>
  );
}

export default App;
