        document.getElementById('sampleForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const sampleId = document.getElementById('sampleId').value;
            const sampleInfo = document.getElementById('sampleInfo');

            fetch('/getSample', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ sampleId: sampleId })
            })
            .then(response => response.json())
            .then(data => {
                sampleInfo.textContent = data.info;
            })
            .catch(error => {
                sampleInfo.textContent = 'Error fetching sample information.';
                console.error('Error:', error);
            });
        });
