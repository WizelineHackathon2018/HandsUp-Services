const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const mainRouter = require('./controllers');
const cors = require('./middlewares/cors');

const taskChannel = require('./utils/task.channel');
const handsChannel = require('./utils/handsup.channel');

const app = express();
const { port } = config;

const server = require('http').Server(app);
const io = require('socket.io')(server);

// Set io instance to share between modules
//ioSingleton(io);

mongoose.connect(config.get('mongoUri'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(cors);

app.get('/api/ping', function(req, res) {
    res.send({data: 'pong'});
});

// channels
const task = require('./channels/task')(io);
taskChannel(task);

const hands = require('./channels/handsup')(io);
handsChannel(hands);

// controllers
const mainRouter = require('./controllers');
app.use('/api', mainRouter);

//app.listen(port, () => console.log(`Running at port: ${port}`));
server.listen(port);    