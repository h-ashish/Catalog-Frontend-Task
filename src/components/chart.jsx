/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { format, parseISO, subDays } from "date-fns";
import moment from "moment";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useChartContext } from "../context/chartContext";
import { useEffect, useState } from "react";

function Chart() {
  const { state, dispatch } = useChartContext();
  const [data, setData] = useState([]);
  const [activeData, setActiveData] = useState(null);

  const handleMouseMove = (state) => {
    if (state && state.activeTooltipIndex !== undefined) {
      setActiveData(data[state.activeTooltipIndex]);
    } else {
      setActiveData(null);
    }
  };

  useEffect(() => {
    state.map((val) => {
      if (val.isActive) {
        setData(val.chartData);
      }
    });
  }, [state]);

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width={"90%"} height={400}>
        <AreaChart
          data={data}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            setActiveData(null);
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4B40EE" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#E8E7FF" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <Area
            dataKey={"value"}
            stroke="#4B40EE"
            fill="url(#color)"
            strokeWidth={2}
          />
          <XAxis dataKey={"date"} axisLine={false} tickLine={false} />
          <YAxis
            dataKey={"value"}
            axisLine={false}
            tickCount={8}
            tickFormatter={(number) => `$${number}`}
          />
          <Tooltip content={<CustomTooltip />} />
          {activeData && (
            <>
              <ReferenceLine
                x={activeData.date}
                stroke="#999999"
                strokeDasharray={"7 7"}
              />
              <ReferenceLine
                y={activeData.value}
                stroke="#999999"
                strokeDasharray={"7 7"}
              />
            </>
          )}
          <CartesianGrid opacity={0.3} horizontal={false} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
export default Chart;

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        {/* <h4>{label}</h4> */}
        <p>${payload[0]?.value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
}
