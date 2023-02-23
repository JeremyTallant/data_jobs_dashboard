// Make a request to the API
fetch('http://127.0.0.1:5050/api/v1.0/states')
    .then(response => response.json())
    .then(data => {

        // Extract the data we want to plot (state names and median household incomes)
        var stateIncomes = data.map(d => ({
            state: d.Name,
            medianIncome: (d['Median household income'])
        }));



        // Create the bar chart using Plotly
        var data = [{
            x: stateIncomes.map(d => d.state),
            y: stateIncomes.map(d => d.medianIncome),
            type: 'bar'
        }];
        var layout = {
            xaxis: {
                title: 'State',
                tickangle: 45
            },
            yaxis: {
                title: 'Median Household Income ($)'
            }
        };
        Plotly.newPlot('barchart', data, layout);
    })
    .catch(error => console.error(error));
