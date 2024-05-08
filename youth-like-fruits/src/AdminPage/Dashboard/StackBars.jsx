import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function StackBars() {
  return (
    <BarChart
      series={[
        { data: [3, 4, 1, 6, 5], stack: 'A', label: 'Food' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Eduction' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Medical' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Clothes' },
        { data: [10, 6, 5, 8, 9], label: 'Appliances' },
      ]}
      // width={950}
      height={390}
      sx={{transition: 'all 0.1s'}}
    />
  );
}
