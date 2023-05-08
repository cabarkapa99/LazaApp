const express = require('express');
const {urlencoded, json} = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/laza', 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const routerStudents = require('./routers/students.js');
const routerUsers = require('./routers/users.js');
const routerVehicles = require('./routers/vehicles.js');
const routerTeachers = require('./routers/teachers.js');
const routerExams = require('./routers/exams.js');
const routerPayments = require('./routers/payments.js');

const app = express();

app.use(urlencoded({extended: false}));
app.use(json());


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