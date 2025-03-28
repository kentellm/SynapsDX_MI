document.getElementById('sampleForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const sampleId = document.getElementById('sampleId').value;
            const sampleInfo = document.getElementById('sampleInfo');

            // Simulate fetching sample information
            const sampleData = {
                '123': 'Sample 123: This is a test sample.',
                '456': 'Sample 456: This is another test sample.',
                '789': 'Sample 789: This is yet another test sample.'
            };

            if (sampleData[sampleId]) {
                sampleInfo.textContent = sampleData[sampleId];
            } else {
                sampleInfo.textContent = 'Sample not found.';
            }
        });
