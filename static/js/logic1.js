d3.json("http://127.0.0.1:5000/api/v1.0/states", function(error, data) {
  if (error) return console.error(error);

  // Extract the data we want to plot (state names and median household incomes)
  var plotData = data.map(function(d) {
    return {
      state: d.Name,
      median_income: +d["Median household income"]
    };
  });

  // Sort the data in descending order by median household income
  plotData.sort(function(a, b) {
    return b.median_income - a.median_income;
  });

  // Extract the state names and median household incomes as separate arrays
  var stateNames = plotData.map(function(d) {
    return d.state;
  });
  var medianIncomes = plotData.map(function(d) {
    return d.median_income;
  });

  // Create the bar chart using Plotly
  var data = [{
    x: stateNames,
    y: medianIncomes,
    type: 'bar'
  }];
  var layout = {
    xaxis: {
      title: 'State'
    },
    yaxis: {
      title: 'Median Household Income ($)'
    }
  };
  Plotly.newPlot('chart', data, layout);
});
