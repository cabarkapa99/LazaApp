const express = require('express');
const controller = require('../controllers/students');

const router = express.Router();

// http://localhost:3000/students/50
router.get('/:index', controller.getStudents);
//http://localhost:3000/students/petar/petrovic/257799888000076
router.get('/:ime/:prezime/:br', controller.searchStudents);

module.exports = router;