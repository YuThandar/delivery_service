import React, { Fragment } from "react";
import CalculateCost from "../Calculation/CalculateCost";
import CalculatePossibleRoute from "../Calculation/CalculatePossibleRoute";

const DeliveryService = (props) => {
  const givenPaths = "AB1,AC4,AD10,BE3,CD4,CF2,DE1,EB3,EA2,FD1";
  const givenAllRoutes = ["A-B-E", "A-D", "E-A-C-F", "A-D-F"];
  const givenRoute = givenAllRoutes.map((route) => route.split(","));

  return (
    <Fragment>
      <CalculateCost paths={givenPaths} routes={givenRoute} />
      <CalculatePossibleRoute paths={givenPaths} start="E" end="D" stops="4" />
    </Fragment>
  );
};
export default DeliveryService;
