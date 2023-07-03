import React from "react";
import { HighchartsWidget, HandsontableWidget } from "./widgets";
import {
  Alert,
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import * as dataSource from "./dataSources/versions.json";
const { tableHeaders, tableData } = dataSource;

function App() {
  return (
    <Box className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{ fontSize: 20, flexGrow: 1 }}
          >
            Developer Assessment
          </Typography>
          <Box>
            <Typography
              variant="overline"
              component="span"
              sx={{ marginRight: 3 }}
            >
              Data Source:
            </Typography>
            <Button variant="contained" size="small">
              Versions
            </Button>
            <Button size="small" disabled sx={{ margin: "0 15px" }}>
              Products
            </Button>
            <Button size="small" disabled>
              Regions
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Container sx={{ paddingTop: 3 }} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              Highcharts Heatmap
            </Typography>
            <Alert severity="warning">
              Please modify the highcharts-widget so that it returns a heatmap
              using &nbsp;
              <Link
                href="https://www.npmjs.com/package/highcharts"
                target="_blank"
              >
                highcharts
              </Link>
              .
            </Alert>
            <HighchartsWidget
              tableHeaders={tableHeaders}
              tableData={tableData}
            />
          </Grid>
          <Grid item lg={12}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              Handsontable Heatmap
            </Typography>
            <Alert severity="warning">
              Please modify the handsontable-widget so that it returns a heatmap
              using &nbsp;
              <Link
                href="https://www.npmjs.com/package/handsontable"
                target="_blank"
                underline="hover"
              >
                handsontable
              </Link>
            </Alert>
            <HandsontableWidget
              tableHeaders={tableHeaders}
              tableData={tableData}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default App;
