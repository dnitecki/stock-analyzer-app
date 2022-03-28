import React, { useState } from "react";
import { mockHistoricalData } from "../../constants/mock";
import { chartConfig } from "../../constants/config";
import { convertUnixTimestamptoDate } from "../../helpers/date-helper";
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

export default function Chart() {
  const [data, setData] = useState(mockHistoricalData);
  const [filter, setFilter] = useState("1W");

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimestamptoDate(data.t[index]),
      };
    });
  };
  return (
    <div className="chart-container">
      <Card>
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
          <AreaChart data={formatData(data)} className="chart-style">
            <defs>
              <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="rgb(199 210 254)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="rgb(199 210 254)"
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
            <Tooltip />
            <XAxis dataKey={"date"} stroke="#fff" />
            <YAxis domain={["dataMin", "dataMax"]} stroke="#fff" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
