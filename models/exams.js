const mongoose = require('mongoose');
const StudentsModel = require('./students');

const examsSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    datum:{
        type: String,
        required: true,
        default:"Datum ispita"
    },
    vreme:{
        type:String,
        required: true,
        default:"Vreme ispita"
    },
    opis:{
        type:String,
        required: true,
        default:"opis"
    },
    students:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students",
        required: true
        }
    ]
}, {collection:'exams'});

const ExamsModel = mongoose.model('Exams', examsSchema);


module.exports = {
    model : ExamsModel,
}