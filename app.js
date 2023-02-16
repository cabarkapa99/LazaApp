const express = require('express');
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/laza', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const routerStudents = require('./routers/students.js');
const routerUsers = require('./routers/students.js');
const routerVehicles = require('./routers/students.js');
const routerTeachers = require('./routers/students.js');
const routerExams = require('./routers/students.js');
const routerPayments = require('./routers/students.js');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.use('/students', routerStudents);
app.use('/users', routerUsers);
app.use('/vehicles', routerVehicles);
app.use('/teachers', routerTeachers);
app.use('/exams', routerExams);
app.use('/payments', routerPayments);

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (err, req, res, next) {
    // Obrada gresaka ide ovde
    console.log("Greska na serveru!");
    console.log(err);
    res.status(500).json(err.message);
});


module.exports = app;