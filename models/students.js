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
    instruktor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teachers",
        required: true
    }

}, {collection: 'students'});

const StudentsModel = mongoose.model('Students', studentsSchema);


module.exports = {
    model : StudentsModel,
}