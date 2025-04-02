document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const sampleId = document.getElementById('sampleId').value;

    // Example data
    const exampleData = {
        '538': {
            name: 'Sample 538',
            date: '2025-04-01',
            status: 'Active',
            location: 'Cell Culture',
            type: 'Positive Control',
            notes: 'No issues',
            chartData: {
                labels: ['2025-04-01', '2025-04-02', '2025-04-03', '2025-04-04', '2025-04-05', '2025-04-06', '2025-04-07'],
                values: [0, 2, 4, 8, 16, 32, 70]
            }
        },
        '564': {
            name: 'Sample 564',
            date: '2025-03-15',
            status: 'Inactive',
            location: 'Assays',
            type: 'Negative Control',
            notes: 'Requires further analysis',
            chartData: {
                labels: ['2025-03-15', '2025-03-16', '2025-03-17', '2025-03-18', '2025-03-19', '2025-03-20', '2025-03-21'],
                values: [0, 2, 16, 50, 80, 80, 85]
            }
        }
    };

    // Get the sample info based on the sample ID
    const sampleInfo = exampleData[sampleId];

    // Display the sample info
    const sampleInfoDiv = document.getElementById('sampleInfo');
    sampleInfoDiv.innerHTML = '';

    if (sampleInfo) {
        sampleInfoDiv.innerHTML = `
            <p><strong>Name:</strong> ${sampleInfo.name}</p>
            <p><strong>Date:</strong> ${sampleInfo.date}</p>
            <p><strong>Status:</strong> ${sampleInfo.status}</p>
            <p><strong>Location:</strong> ${sampleInfo.location}</p>
            <p><strong>Type:</strong> ${sampleInfo.type}</p>
            <p><strong>Notes:</strong> ${sampleInfo.notes}</p>
        `;

        // Create the chart
        const ctx = document.getElementById('sampleChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: sampleInfo.chartData.labels,
                datasets: [{
                    label: `${sampleInfo.name} Data`,
                    data: sampleInfo.chartData.values,
                    borderColor: '#007BFF',
                    fill: false
                }]
            },
            options: {
                responsive: true,
                scales: {
              			xAxis: [{
                        type: 'time',
                        time: {
                            unit: 'day'
                        }
                    }],
                    yAxis: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        
    } else {
        sampleInfoDiv.innerHTML = '<p>Sample ID not found.</p>';
        document.getElementById('sampleChart').style.display = 'none';
    }
});
