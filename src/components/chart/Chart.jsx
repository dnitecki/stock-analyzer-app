import React, { useState } from "react";
import { mockHistoricalData } from "../../constants/mock";
import {
  convertDateToUnixTimestamp,
  convertUnixTimestamptoDate,
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
        <ResponsiveContainer>
          <AreaChart data={formatData(data)}>
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
            <XAxis dataKey={"date"} />
            <YAxis domain={["dataMin", "dataMax"]} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
