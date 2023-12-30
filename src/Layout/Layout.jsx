import { Box } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box paddingX={4} paddingY={4}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
