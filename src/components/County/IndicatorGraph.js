import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const IndicatorGraph = ({ data, yDataKey }) => {
  return(
    <div className="recharts-responsive-container">
      <LineChart width={600} height={300} data={data}>
       <XAxis dataKey="year" />
       <YAxis />
       <Tooltip />
       <CartesianGrid strokeDasharray="3 3" />
       <Line type="natural" dataKey={yDataKey} />
      </LineChart>
    </div>
  );
};

export default IndicatorGraph;
