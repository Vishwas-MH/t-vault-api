const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});


mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => console.log('Connected to DB')
);

const port = process.env.PORT || 4000;

app.listen(port,() => {
    console.log(`Port: ${port}`);
});