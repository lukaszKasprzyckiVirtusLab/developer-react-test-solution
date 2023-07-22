import React, { ReactElement } from "react";
import { Box, Paper, TableContainer } from "@mui/material";

const Widget = ({ children }: { children: ReactElement }) => (
  <Box>
    <TableContainer component={Paper}>{children}</TableContainer>
  </Box>
);

export default Widget;
