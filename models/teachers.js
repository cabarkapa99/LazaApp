const mongoose = require('mongoose');

const teachersSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ime:{
        type: String,
        required: true,
        default: "Ime instruktora"
    },
    prezime:{
        type: String,
        required: true,
        default: "Prezime instruktora"
    },
    LK:{
        type: String,
        required: true,
        default: "Datum LK"
    },
    licenca:{
        type: String,
        required: true,
        default: "Datum licence"
    },
    lekarski:{
        type: String,
        required: true,
        default: "Datum lekarskog"
    },
    seminar:{
        type: String,
        required: true,
        default: "Datum seminara"
    },
    telefon:{
        type: String,
        required: true,
        default:"br telefona instruktora"
    },
    email:{
        type: String,
        required: true,
        default:"email adresa instruktora"
    },
    redniBr:{
        type: Number,
        required: true,
        default: -1
    }

}, {collection:'teachers'});

const TeachersModel = mongoose.model('Teachers', teachersSchema);

async function getTeachersId(teachersNumber){
    const teacher = await TeachersModel.find({redniBr: teachersNumber}).exec();
    return teacher._id;
}

async function getTeachers(){
    let teachers = await TeachersModel.find().exec();
    if(teachers.length > 0){
        return teachers;
    }else{
        return null;
    }
}

module.exports = {
    model : TeachersModel,
    getTeachersId,
    getTeachers,
    
}