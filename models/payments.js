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

const addPayment = async function(paymentData){
    let studentNumber = paymentData.student;
    let studentId = await StudentsModel.getStudentsId(studentNumber);

    let newPayment = new PaymentsModel({
        _id: new mongoose.Types.ObjectId(),
        datum: paymentData.datum,
        svrha: paymentData.svrha,
        iznos: paymentData.iznos,
        student: studentId
    });

    return newPayment.save();
}

const getPaymentsForStudent = async function(studentNumber){
    let studentId = await StudentsModel.getStudentsId(studentNumber);
    let paymentsOfStudent = await PaymentsModel.find({student: studentId}).exec();

    if(paymentsOfStudent.length > 0){
        return paymentsOfStudent;
    }else{
        return null;
    }
}

module.exports = {
    model : PaymentsModel,
    addPayment,
    getPaymentsForStudent,
    
}