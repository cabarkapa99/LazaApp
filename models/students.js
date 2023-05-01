/* 
Ovaj model definise ucenike potrebno je da sadrzi ime i prezime ucenika kao i njegov jedinstveni broj kandidata, takodje niz izvrsenih uplata
koje se sacinjavaju od podataka datum, kolicina i razlog uplate ucenik treba da ima i polje status kao i polja za ispite i datume polaganja
*/

const mongoose = require('mongoose');
const TeachersModel = require('./teachers');

const studentsSchema = new mongoose.Schema({
    _id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    ime:{
        type: String,
        required: true,
        default: "Ime kandidata"
    },
    prezime:{
        type: String,
        required: true,
        default: "Prezime kandidata"
    },
    brKandidata:{
        type: String,
        required: true,
        default: "Broj kandidata"
    },
    telefon:{
        type: String,
        required: true,
        default:"br telefona kandidata"
    },
    email:{
        type: String,
        required: true,
        default:"email adresa kandidata"
    },
    redniBr:{
        type: Number,
        required: true,
        default: -1
    },
    instruktor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teachers",
        required: true
    }

}, {collection: 'students'});

const StudentsModel = mongoose.model('Students', studentsSchema);


// loadovanje po 50 studenata(klijent salje raspon rednih brojeva studenata)
// pretraga po imenu broju i prezimenu se vrsi dinamicki iz baze na zahtev klijenta
// klijent treba da salje zahtev na svakih 3,4 slova dodatih
// kada se selektuje odredjeni kandidat tada klijent za njega trazi informacije o uplati, instruktoru i ispitima

const addStudent = async function(studentData){
    let instruktorID = await TeachersModel.getTeachersId(studentData.redniBrInstruktora);
    let numberOfStudents = await StudentsModel.count();
    let redniBrStudenta = numberOfStudents++;

    let newStudent = new StudentsModel({
        _id: new mongoose.Types.ObjectId(),
        ime: studentData.ime,
        prezime: studentData.prezime,
        brKandidata: studentData.brKandidata,
        telefon: studentData.telefon,
        email: studentData.email,
        redniBr: redniBrStudenta,
        instruktor: instruktorID
    });

    return await newStudent.save();
};

// funkcija za prikaz po 50 studenata, klijent salje broj od kojeg zeli narednih 50 da dobije
const getStudents = async function(index){
    let studentsInRange = await StudentsModel.find({redniBr:{$gte: index, $lt:index+50}}).exec();
    if(studentsInRange.length > 0){
        return studentsInRange;
    }else{
        return null;
    }
}

const searchStudents = async function(searchIme, searchPrezime, searchBrKandidata){
    let searchResults = await StudentsModel.find({
        $and:[
            {ime: new RegExp(searchIme)},
            {prezime: new RegExp(searchPrezime)},
            {redniBr: new RegExp(searchBrKandidata)}
        ]
    }).exec();

    if(searchResults.length > 0){
        return searchResults;
    }else{
        return null;
    }
}

const getTeacher = async function(redniBr){
    let student = await StudentsModel.find({redniBr: redniBr}).exec();
    let teachersID = student[0].instruktor;
    let teacher = await TeachersModel.findById(teachersID).exec();

    return teacher;
}

const getStudentsId = async function(redniBr){
    let student = await StudentsModel.find({redniBr: redniBr}).exec();
    return student[0]._id;
}

// od CRUD operacija ostale su UD operacije mada za D ne bih nista ni pisao 
// za U mozda treba instruktor, telefon, email

module.exports = {
    model : StudentsModel,
    addStudent,
    getStudents,
    searchStudents,
    getTeacher,
    getStudentsId
}