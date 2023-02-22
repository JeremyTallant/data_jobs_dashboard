d3.json("http://127.0.0.1:5050/api/v1.0/states", function (error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data); // log the data to the console
        // Extract the data we want to plot (state names and median household incomes)
        var stateNames = data.map(function (d) { return d['Name']; });
        var medianIncomes = data.map(function (d) {
            var income = d['Median household income'];
            // Strip the dollar sign and space from the income string, and parse it as a number
            return parseFloat(income.replace(/\$| /g, ''));
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
        Plotly.newPlot('barchart', data, layout);
    }
});
