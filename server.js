require('./data/db')();
const express = require('express');
const mongoose = require('mongoose');
const questionService = require('./services/question.service.server');
const studentService = require('./services/student.service.server');
const answerService = require('./services/answer.service.server');
const dbService = require('./services/db-data.service.server');
const server = express();
const bodyParser = require('body-parser');

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
questionService(server);
studentService(server);
answerService(server);
dbService(server);


server.listen(process.env.PORT || 3000);
