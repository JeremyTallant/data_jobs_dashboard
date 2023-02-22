d3.json('/api/v1.0/salary').then(function (data) {
    var jobRoles = data.map(function (d) { return d['Job Role']; });
    var medianSalaries = data.map(function (d) { return d['Median Salary']; });

    var trace1 = {
        x: jobRoles,
        y: medianSalaries,
        type: 'bar',
        marker: {
            color: 'rgb(158,202,225)',
            opacity: 0.6,
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    var data = [trace1];

    var layout = {
        xaxis: {
            title: 'Job Role'
        },
        yaxis: {
            title: 'Median Salary'
        }
    };

    Plotly.newPlot('plot', data, layout);
}).catch(function (error) {
    console.log(error);
});

// Define the API URL
const apiUrl = "http://127.0.0.1:5050/api/v1.0/tools";

// Use d3.json() to fetch the data from the API
d3.json(apiUrl).then(function (data) {
    // Extract the data for "Data Analysis Tools" and "Count" columns
    const toolsData = data.map(function (d) {
        return { tool: d["Data Analysis Tools"], count: d["Count"] };
    });

    // Sort the data in descending order by count
    toolsData.sort(function (a, b) {
        return a.count - b.count;
    });

    // Extract the tool names and counts for Plotly
    const toolNames = toolsData.map(function (d) {
        return d.tool;
    });
    const toolCounts = toolsData.map(function (d) {
        return d.count;
    });

    // Define the Plotly data and layout objects
    const plotData = [{ x: toolCounts, y: toolNames, type: "bar", orientation: "h" }];

    // Use Plotly.newPlot() to create the bar chart
    Plotly.newPlot("bar", plotData);
});
