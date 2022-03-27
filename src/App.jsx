import "./app.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Watchlist from "./pages/watchlist/Watchlist";
import ReportBug from "./pages/reportBug/ReportBug";
import "primeicons/primeicons.css";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <div>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/watchlist" element={<Watchlist />} />
          <Route exact path="/reportbug" element={<ReportBug />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
