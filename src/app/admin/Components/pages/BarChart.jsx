import { Box } from "@mui/material";
import Header from "./globals/Header";
import Bar from "../charts/Bar";

const BarChart = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <Bar />
      </Box>
    </Box>
  );
};

export default BarChart;