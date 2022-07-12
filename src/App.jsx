import "./app.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Watchlist from "./pages/watchlist/Watchlist";
import ReportBug from "./pages/reportBug/ReportBug";
import "primereact/resources/themes/lara-dark-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import { useState } from "react";
import StockContext from "./components/context/StockContext";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  const location = useLocation();
  const [stockSymbol, setStockSymbol] = useState("INTC");
  return (
    <div className="app">
      <div>
        <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
          <div className="app-container">
            <div className="sidebar">
              <Sidebar />
            </div>
            <div className="app-content">
              <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Dashboard />} />
                <Route exact path="/watchlist" element={<Watchlist />} />
                <Route exact path="/reportbug" element={<ReportBug />} />
              </Routes>
            </div>
          </div>
        </StockContext.Provider>
      </div>
    </div>
  );
}

export default App;
