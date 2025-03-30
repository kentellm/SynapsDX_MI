import { Amplify } from 'aws-amplify';
import config from './aws-exports.js';

Amplify.configure(config)

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

const CellGrowthDB = [
  {
    "SampleID": "564",
    "GrowthData": [
      { "date": "2024-10-26", "confluence": 0 },
      { "date": "2024-10-27", "confluence": 7 },
      { "date": "2024-10-28", "confluence": 15 },
      { "date": "2024-10-29", "confluence": 25 },
      { "date": "2024-10-30", "confluence": 38 },
      { "date": "2024-10-31", "confluence": 52 },
      { "date": "2024-11-01", "confluence": 65 },
      { "date": "2024-11-02", "confluence": 75 },
      { "date": "2024-11-03", "confluence": 83 },
      { "date": "2024-11-04", "confluence": 90 },
      { "date": "2024-11-05", "confluence": 95 },
      { "date": "2024-11-06", "confluence": 98 },
      { "date": "2024-11-07", "confluence": 99 },
      { "date": "2024-11-08", "confluence": 100 }
    ]
  },
  {
    "SampleID": "538",
    "GrowthData": [
      { "date": "2024-10-26", "confluence": 0 },
      { "date": "2024-10-27", "confluence": 5 },
      { "date": "2024-10-28", "confluence": 12 },
      { "date": "2024-10-29", "confluence": 20 },
      { "date": "2024-10-30", "confluence": 30 },
      { "date": "2024-10-31", "confluence": 40 },
      { "date": "2024-11-01", "confluence": 55 },
      { "date": "2024-11-02", "confluence": 68 },
      { "date": "2024-11-03", "confluence": 78 },
      { "date": "2024-11-04", "confluence": 85 },
      { "date": "2024-11-05", "confluence": 92 },
      { "date": "2024-11-06", "confluence": 97 },
      { "date": "2024-11-07", "confluence": 99 },
      { "date": "2024-11-08", "confluence": 100 }
    ]
  }
]
