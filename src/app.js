const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mainRouter = require('./controllers');
const cors = require('./middlewares/cors');

const app = express();
const { port } = config;

mongoose.connect(config.get('mongoUri'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors);
app.use('/api', mainRouter);

app.get('/api/ping', function(req, res) {
    res.send({data: 'pong'});
});

app.listen(port, () => console.log(`Running at port: ${port}`));