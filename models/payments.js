const mongoose = require('mongoose');
const StudentsModel = require('./students');

const paymentsSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    datum:{
        type: String,
        required: true,
        default:"Datum uplate"
    },
    svrha:{
        type:String,
        required: true,
        default:"Svrha uplate"
    },
    iznos:{
        type:String,
        required: true,
        default:"Iznos"
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Students",
        required: true
    }
}, {collection:'payments'});

const PaymentsModel = mongoose.model('Payments', paymentsSchema);


module.exports = {
    model : PaymentsModel,
}