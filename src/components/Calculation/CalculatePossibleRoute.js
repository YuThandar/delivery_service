const CalculatePossibleRoute = (props) => {
  let start = props.start;
  let end = props.end;
  let stops = props.stops;

  const path = props.paths.split(",");
  let onlyRoute = [];
  let cost = [];

  function generateRoute(Sstart, route, stops) {
    let start = Sstart;
    // console.log(typeof(start));
    let result = [];
    //   console.log("Start Point", start, stops);
    if (stops > 0) {
      for (var i in start) {
        for (var j in route) {
          if (start[i][start[i].length - 1] == route[j][0]) {
            // console.log("Start Route", start[i], route[j]);
            result.push(start[i] + route[j]);
          }
        }
      }

      return generateRoute(result, route, stops - 1);
    } else {
      return start;
    }
  }

  function hasDuplicates(array) {
    return new Set(array).size !== array.length;
  }

  for (let i in path) {
    onlyRoute.push(path[i].slice(0, 2));
    cost.push(parseInt(path[i].slice(2)));
  }

  let startRoute = [];
  for (let i = 0; i < onlyRoute.length; i++) {
    if (start == onlyRoute[i][0]) {
      startRoute.push(onlyRoute[i]);
    }
  }

  let possibleRoute = generateRoute(startRoute, onlyRoute, stops - 1);
  let startToEnd = [];
  for (let i = 0; i < possibleRoute.length; i++) {
    if (end == possibleRoute[i][possibleRoute[i].length - 1]) {
      startToEnd.push(possibleRoute[i]);
    }
  }
  let count = 0;
  for (let i = 0; i < startToEnd.length; i++) {
    let result = [];
    for (let j = 0; j < startToEnd[i].length - 1; j = j + 2) {
      result.push(startToEnd[i][j] + startToEnd[i][j + 1]);
    }
    if (hasDuplicates(result) == false) {
      count++;
    }
  }
  console.log(
    "Result",
    `Number of possible delivery route from ${start} to ${end} = ${count} `
  );

  return (
    <div>
      <h3>Case 2 (Possible Route)</h3>
      <p>
        Number of possible delivery route from {start} to {end} = {count}
      </p>
    </div>
  );
};

export default CalculatePossibleRoute;
