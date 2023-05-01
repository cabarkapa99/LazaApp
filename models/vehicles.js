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
        _id:false,
        type:String,
        required: true,
        default:" " 
    }],
    sviTehnicki:[{
        _id:false,
        type:String,
        required: true,
        default:" " 
    }],
    instruktor:[
        {
            _id:false,  
            type: mongoose.Schema.Types.ObjectId,
            ref: "Teachers",
            required: true
        }
    ]

},{collection:'vehicles'});


const VehiclesModel = mongoose.model('Vehicles', vehiclesSchema);

// dodavanje vozila
// dohvatanje svih vozila filter se vrsi na klijentu
// update podataka kao sto su poslednja reg i poslednji teh

const addVehicle = async function(vehicleData){
    let teachersNumbers = vehicleData.teachersNumbers;
    let teachersIDs = [];
    for(const teachersNumber of teachersNumbers){
        let instruktorId = await TeachersModel.getTeachersId(teachersNumber);
        teachersIDs.push(instruktorId);
    }

    let newVehicle = new VehiclesModel({
        _id: new mongoose.Types.ObjectId(),
        kategorija: vehicleData.kategorija,
        brRegistracije: vehicleData.brRegistracije,
        markaVozila: vehicleData.markaVozila,
        modelVozila: vehicleData.modelVozila,
        poslednjiTehnicki: vehicleData.poslednjiTehnicki,
        poslednjaRegistracija: vehicleData.poslednjaRegistracija,
        sviTehnicki: [],
        sveRegistracije: [],
        instruktor: teachersIDs
    });

    return newVehicle.save();
}

const getVehicles = async function(){
    let vehicles = await VehiclesModel.find().exec();
    if(vehicles.length > 0){
        return vehicles;
    }else{
        return null;
    }
}
//salje se objekat kao config u kome su polja, polja baze koja se updateuju, a vrednosti tih polja, nove vrednosti koje treba postaviti
const updateData = async function(brRegistracije, data){
    // updateuju se podaci kao sto su poslednja reg ili poslednji teh
    // {"poslednjiTehnicki": "neki datum"} npr 

    for(const polje in data){
        let vehicle = await VehiclesModel.find({brRegistracije: brRegistracije}).exec();
        let previousValueOfProperty = vehicle[0][polje];
        let newValueOfProperty = data[polje];

        if(polje === "poslednjiTehnicki"){
            await VehiclesModel.updateOne(
                {brRegistracije: brRegistracije}, 
                {$push:{sviTehnicki: previousValueOfProperty}}
                ).exec();
            return await VehiclesModel.updateOne(
                {brRegistracije: brRegistracije},
                {$set:{poslednjiTehnicki: newValueOfProperty}}
            )
        }else{
            await VehiclesModel.updateOne(
                {brRegistracije: brRegistracije}, 
                {$push:{sveRegistracije: previousValueOfProperty}}
                ).exec();
            return await VehiclesModel.updateOne(
                {brRegistracije: brRegistracije},
                {$set:{poslednjaRegistracija: newValueOfProperty}}
            )
        }

    }
}
//salje se objekat config s klijenta {"brInstruktora" : "add"} ili {"brInstruktora" : "remove"}
const updateTeachers = async function(brRegistracije, data){
    for(const teachersNumber in data){
        let instruktorId = await TeachersModel.getTeachersId(teachersNumber);
        if(data[teachersNumber] === "add"){
            return await VehiclesModel.updateOne(
                {brRegistracije: brRegistracije}, 
                {$push:{instruktor: instruktorId}}
                ).exec();
        }else{
            return await VehiclesModel.updateOne(
                {brRegistracije: brRegistracije}, 
                {$pull:{instruktor: instruktorId}}
                ).exec();
        }
    }
}

module.exports = {
    model : VehiclesModel,
    addVehicle,
    getVehicles,
    updateData,
    updateTeachers,
    
}