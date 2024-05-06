import * as React from 'react';
import { PieChart } from '@mui/x-charts';
const data = [
  { id: 0, value: 10, label: 'series A' },
  { id: 1, value: 15, label: 'series B' },
  { id: 2, value: 20, label: 'series C' },
];

export default function PieActiveArc() {
  return (
    <PieChart
      series={[
        {
          data,
          highlightScope: { faded: 'global', highlighted: 'item' },
          faded: { innerRadius: 50, additionalRadius: -50, color: 'gray' },
        },
      ]}
      height={300}
    />
  );
}