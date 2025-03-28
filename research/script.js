const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(bodyParser.json());

const uri = 'your_mongodb_connection_string';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    if (err) throw err;
    const db = client.db('sampleDB');
    const collection = db.collection('samples');

    app.post('/getSample', async (req, res) => {
        const sampleId = req.body.sampleId;
        const sample = await collection.findOne({ id: sampleId });
        if (sample) {
            res.json({ info: sample.info });
        } else {
            res.json({ info: 'Sample not found.' });
        }
    });

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });
});
