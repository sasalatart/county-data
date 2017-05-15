import React from 'react';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const IndicatorGraph = ({ data, height, width, yDataKey }) => {
  return(
    <div className="recharts-responsive-container">
      <LineChart data={data} height={height} width={width}>
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
