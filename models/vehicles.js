const mongoose = require('mongoose');
const TeachersModel = require('./teachers');

const vehiclesSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    kategorija:{
        type: String,
        required:true,
        default:"Kategorija vozila"
    },
    brRegistracije:{
        type: String,
        required: true,
        default:"Registracija"
    },
    markaVozila:{
        type:String,
        required: true,
        default:"Marka"
    },
    modelVozila:{
        type:String,
        required: true,
        default:"Model" 
    },
    poslednjiTehnicki:{
        type:String,
        required: true,
        default:"Datum poslednjeg tehnickog" 
    },
    poslednjaRegistracija:{
        type:String,
        required: true,
        default:"Datum poslednje registracije" 
    },
    sveRegistracije:[{
        type:String,
        required: true,
        default:" " 
    }],
    sviTehnicki:[{
        type:String,
        required: true,
        default:" " 
    }],
    instruktor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teachers",
        required: true
    }

},{collection:'vehicles'});


const VehiclesModel = mongoose.model('Vehicles', vehiclesSchema);


module.exports = {
    model : VehiclesModel,
}