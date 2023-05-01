/* 
Ovaj model definise ucenike potrebno je da sadrzi ime i prezime ucenika kao i njegov jedinstveni broj kandidata, takodje niz izvrsenih uplata
koje se sacinjavaju od podataka datum, kolicina i razlog uplate ucenik treba da ima i polje status kao i polja za ispite i datume polaganja
*/
const model = require('../models/students');

async function getStudents(req, res, next) {
    try {
      const index = parseInt(req.params.index);
      const students = await model.getStudents(index);

      if(students === null){
        throw new Error("Greska, nije moguce dohvatiti ucenike!");
      }

      res.json(students);
    } catch (error) {
      next(error);
    }
}
async function addStudent(req, res, next) {
    try {
      const student = req.body;
      const result = await model.addStudent(student);
      res.json(result);
    } catch (error) {
      next(error);
    }
}
async function searchStudents(req, res, next) {
    try {
      const { searchIme, searchPrezime, searchBrKandidata } = req.body;
      const results = await model.searchStudents(searchIme, searchPrezime, searchBrKandidata);
      
      if (results === null) {
        throw new Error("Greska prilikom pretrage!");
      }
      
      res.json(results);
    } catch (error) {
      next(error);
    }
}

module.exports = {
    getStudents,
    addStudent,
    searchStudents,
}