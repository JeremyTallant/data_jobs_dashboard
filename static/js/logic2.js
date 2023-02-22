// Use d3.json() to fetch the salary data from the API
d3.json('/api/v1.0/salary').then(function (data) {

    // Extract the job roles and median salaries from the data
    var jobRoles = data.map(function (d) { return d['Job Role']; });
    var medianSalaries = data.map(function (d) { return d['Median Salary']; });

    // Create a Plotly trace for the bar chart
    var trace1 = {
        x: jobRoles,
        y: medianSalaries,
        type: 'bar',
        // Define the color and opacity of the bars
        marker: {
            color: ['red', 'blue', 'green', 'purple'],
            opacity: 0.6,
            // Define the color and width of the bar outlines
            line: {
                color: 'rgb(8,48,107)',
                width: 1.5
            }
        }
    };

    // Create a data array with the trace
    var data = [trace1];

    // Define the layout of the bar chart
    var layout = {
        xaxis: {
            title: 'Job Role'
        },
        yaxis: {
            title: 'Median Salary'
        }
    };

    //Create the bar chart using Plotly 
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
    const plotData = [{
        x: toolCounts,
        y: toolNames,
        type: "bar",
        orientation: "h",
        marker: {
            color: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]
        }
    }];

    // Use Plotly.newPlot() to create the bar chart
    Plotly.newPlot("bar", plotData);
});
