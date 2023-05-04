const express = require('express');
const controller = require('../controllers/vehicles');

const router = express.Router();

router.get('/', controller.getVehicles);
router.post('/new', controller.addVehicle);
router.patch('/data', controller.updateData);
router.patch('/teachers', controller.updateTeachers);

module.exports = router;