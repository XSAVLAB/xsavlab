import { Box } from "@mui/material";
import Header from "./globals/Header";
import Pie from "../charts/Pie";

const PieChart = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <Pie />
      </Box>
    </Box>
  );
};

export default PieChart;