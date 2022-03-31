import React, { useState, useContext, useEffect } from "react";
// import { mockHistoricalData } from "../../constants/mock";
import { chartConfig } from "../../constants/config";
import {
  convertUnixTimestamptoDate,
  convertDateToUnixTimestamp,
  createDate,
} from "../../helpers/date-helper";
import "./Chart.scss";
import Card from "../card/Card";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import ChartFilter from "../chartFilter/ChartFilter";
import { fetchHistoricalData } from "../../api/stock-api";
import StockContext from "../context/StockContext";

export default function Chart() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("1W");
  const { stockSymbol } = useContext(StockContext);
  const formatData = (data) => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestamptoDate(data.t[index]),
      };
    });
  };
  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];
      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startTimestampUnix = convertDateToUnixTimestamp(startDate);
      const endTimestampUnix = convertDateToUnixTimestamp(endDate);
      return { startTimestampUnix, endTimestampUnix };
    };
    const updateChartData = async () => {
      try {
        const { startTimestampUnix, endTimestampUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;
        const result = await fetchHistoricalData(
          stockSymbol,
          resolution,
          startTimestampUnix,
          endTimestampUnix
        );
        setData(formatData(result));
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };
    updateChartData();
  }, [stockSymbol, filter]);

  return (
    <div className="card">
      <ul className="chart-filters">
        {Object.keys(chartConfig).map((item) => {
          return (
            <li key={item}>
              <ChartFilter
                text={item}
                active={filter === item}
                onClick={() => {
                  setFilter(item);
                }}
              />
            </li>
          );
        })}
      </ul>
      <ResponsiveContainer>
        <AreaChart
          data={data}
          width="100%"
          height="100%"
          className="chart-style"
          margin={{ top: 40, bottom: 0, left: -10, right: 0 }}
        >
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgba(255, 255, 255, 0.5)"
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor="rgba(255, 255, 255, 0.5)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#fff"
            fillOpacity={1}
            strokeWidth={0.5}
            fill="url(#chartColor)"
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "5px",
              border: "2px solid rgba(255, 255, 255, 0.2)",
            }}
          />
          <XAxis dataKey={"date"} stroke="#fff" fontSize={12} />
          <YAxis domain={["dataMin", "dataMax"]} stroke="#fff" fontSize={12} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
