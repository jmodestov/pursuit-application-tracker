const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRouter = require('./routes/api');

const PORT = 3000;

require('dotenv').configure();

const app = express();

// URI to MongoDB Atlas
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Handles the parsing of any incoming requests.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// statically serve everything in the build folder
app.use('/build', express.static(path.join(__dirname, '../build')));

app.use('/api', apiRouter);

// respond with main app
app.get('/', (req, res) => res.status(200).sendFile(path.resolve(__dirname, '../index.html')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
