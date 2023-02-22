
d3.json("http://127.0.0.1:5050/api/v1.0/jobs", function (error, data) {
    if (error) return console.error(error);

    var jobData = [];
    data.forEach(function (d) {
        jobData.push({
            company: d["Employer name"],
            city: d["Job city"],
            title: d["Job title"],
            remote: d["Job is remote"],
            apply_link: d["Job apply link"],
            lat: d["Job latitude"],
            lng: d["Job longitude"]
        });
    });

    // Create the Leaflet map
    var map = L.map("map").setView([37.09, -95.71], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(map);

    // Add markers to the map
    jobData.forEach(function (d) {
        var marker = L.marker([d.lat, d.lng]).addTo(map);
        marker.bindPopup(`Company: ${d.company}<br>
                         City: ${d.city}<br>
                         Job Title: ${d.title}<br>
                         Remote: ${d.remote}<br>
                         Apply Link: <a href="${d.apply_link}">${d.apply_link}</a>`);
    });
});