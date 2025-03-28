document.getElementById('sampleForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const sampleId = document.getElementById('sampleId').value;
            const sampleInfo = document.getElementById('sampleInfo');

            // Simulate fetching sample information
            const sampleData = {
                '538': 'Sample 538: This is a positive control.',
                '564': 'Sample 564: This is a negative control.',
                '1': 'Sample 1: This is a test sample.'
            };

            if (sampleData[sampleId]) {
                sampleInfo.textContent = sampleData[sampleId];
            } else {
                sampleInfo.textContent = 'Sample not found.';
            }
        });
