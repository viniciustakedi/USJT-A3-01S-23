import React from "react";
import { Divider, Grid, Tooltip } from "@mui/material";
import "./genre-chart-style.scss";

interface GenreChartProps {
  data: [string, number][];
}

const GenreChart: React.FC<GenreChartProps> = ({ data }) => {
  const maxCount = Math.max(...data.map(([_, count]) => count));

  return (
    <Grid container alignItems="flex-end" justifyContent="space-between">
      {data.slice(0, 5).map(([genre, count]) => {
        const height = count === maxCount ? "10rem" : `${(count / maxCount) * 10}rem`;

        return (
          <Tooltip key={genre} title={genre}>
            <Divider
              className="chart-bar"
              style={{ width: `18%`, height: height }}
            />
          </Tooltip>
        );
      })}
    </Grid>
  );
};

export default GenreChart;
