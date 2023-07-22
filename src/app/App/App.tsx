import React, { useState } from "react";
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
import HandsOnTableWidget from "../../widgets/HandsOnTableWidget/HandsOnTableWidget";
import HighchartsWidget from "../../widgets/HighchartsWidget/HighchartsWidget";
import { ButtonVariant, DataSource } from "./App.constants";
import { getWidgetData } from "./App.helpers";

const { VERSIONS, REGIONS, PRODUCTS } = DataSource;

const App = () => {
  const [dataSource, setDataSource] = useState(VERSIONS);
  const setButtonVariant = (
    dataSourceId: DataSource,
    selectedDataSource: DataSource
  ) =>
    dataSourceId === selectedDataSource
      ? ButtonVariant.CONTAINED
      : ButtonVariant.TEXT;

  const { tableHeaders, tableData } = getWidgetData(dataSource);

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
            <Button
              variant={setButtonVariant(VERSIONS, dataSource)}
              onClick={() => setDataSource(VERSIONS)}
              size="small"
            >
              Versions
            </Button>
            <Button
              variant={setButtonVariant(PRODUCTS, dataSource)}
              onClick={() => setDataSource(PRODUCTS)}
              size="small"
              sx={{ margin: "0 15px" }}
            >
              Products
            </Button>
            <Button
              variant={setButtonVariant(REGIONS, dataSource)}
              onClick={() => setDataSource(REGIONS)}
              size="small"
            >
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
            <HandsOnTableWidget
              tableHeaders={tableHeaders}
              tableData={tableData}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default App;
