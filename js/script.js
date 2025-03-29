document.getElementById("sampleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const sampleId = document.getElementById("sampleId").value;
    if (sampleId) {
        // Fetch sample data based on sampleId
        fetchSampleData(sampleId);
    }
});

function fetchSampleData(sampleId) {
    // Simulate fetching data (you can replace this with an actual API call)
    const sampleData = {
        panel1: "Data for Panel 1",
        panel2: "Data for Panel 2",
        panel3: "Data for Panel 3",
        panel4: "Data for Panel 4",
        panel5: "Data for Panel 5",
        panel6: "Data for Panel 6"
    };

    // Update the dashboard with sample data
    document.getElementById("panel1").innerText = sampleData.panel1;
    document.getElementById("panel2").innerText = sampleData.panel2;
    document.getElementById("panel3").innerText = sampleData.panel3;
    document.getElementById("panel4").innerText = sampleData.panel4;
    document.getElementById("panel5").innerText = sampleData.panel5;
    document.getElementById("panel6").innerText = sampleData.panel6;

    // Show the dashboard
    document.getElementById("dashboard").style.display = "block";
}
