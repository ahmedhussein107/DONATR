import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { id: 0, value: 10, label: 'Food ' },
  { id: 1, value: 15, label: 'Eduction ' },
  { id: 2, value: 20, label: 'Medical' },
  { id: 3, value: 10, label: 'Clothes' },
  { id: 4, value: 15, label: 'Appliances' }
];

export default function PieClickNoSnap() {
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
      sx={{backgroundColor : "#D5E0E0"}}
    />
  );
}