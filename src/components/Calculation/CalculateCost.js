import React, { Fragment } from "react";

const CalculateCost = (props) => {
  // console.log(path[0].slice(0, 2));
  const CalCostList = (
    <ul>
      {props.routes.map((gRoute, index) => {
        const path = props.paths.split(",");
        const route = gRoute.toString().split("-");
        const onlyRoute = [];
        const cost = [];

        for (let i in path) {
          onlyRoute.push(path[i].slice(0, 2));
          cost.push(parseInt(path[i].slice(2)));
        }

        let result = 0;
        const inputPath = [];
        for (let i = 0; i < route.length - 1; i++) {
          inputPath.push(route[i] + route[i + 1]);
        }

        for (let i = 0; i < inputPath.length; i++) {
          for (let j = 0; j < onlyRoute.length; j++) {
            // console.log(inputPath[i]);
            // console.log(onlyRoute[j]);
            if (inputPath[i] === onlyRoute[j]) {
              result += cost[j];
            }
          }
        }
        for (let i = 0; i < inputPath.length; i++) {
          if (onlyRoute.indexOf(inputPath[i]) === -1) {
            result = "No Such Route";
          }
        }
        // console.log(`The delivery cost for route ${gRoute} is ${result}`);
        return (
          <p key={index}>
            The delivery cost for route {gRoute} is {result}
          </p>
        );
      })}
    </ul>
  );

  return (
    <Fragment>
      <h3>Case 1 (Delivery Cost)</h3>
      {CalCostList}
    </Fragment>
  );
};
export default CalculateCost;
