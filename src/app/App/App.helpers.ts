import { DataSource } from "./App.constants";
import * as products from "../../dataSources/products.json";
import * as regions from "../../dataSources/regions.json";
import * as versions from "../../dataSources/versions.json";

export const getWidgetData = (dataSource: DataSource) => {
  switch (dataSource) {
    case DataSource.PRODUCTS:
      return products;
    case DataSource.REGIONS:
      return regions;
    case DataSource.VERSIONS:
    default:
      return versions;
  }
};
