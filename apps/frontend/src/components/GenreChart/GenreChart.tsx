import React from "react";
import { Card, BarList } from '@tremor/react'
import "./genre-chart-style.scss";

interface GenreChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

const GenreChart: React.FC<GenreChartProps> = ({ data }) => {

  return (
    <Card className="max-w bg-transparent border-none shadow-none ring-0">
    <BarList
      data={data}
      className='mt-2'
      color='emerald'
    />
    </Card>
  );
};

export default GenreChart;
