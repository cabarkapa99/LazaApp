const model = require('../models/vehicles');

async function getVehicles(req, res, next) {
    try {
      const vehicles = await model.getVehicles();

      if(vehicles === null){
        throw new Error("Greska, nije moguce dohvatiti vozila!");
      }

      res.json(vehicles);
    } catch (error) {
      next(error);
    }
}
async function addVehicle(req, res, next) {
    try {
      const vehicleData = req.body;
      const newVehicle = await model.addVehicle(vehicleData);
      res.status(201).json(newVehicle);
    } catch (error) {
      next(error);
    }
}
async function updateTeachers(req, res, next) {
    try {
      const { brRegistracije, data } = req.body;
      const updatedVehicle = await model.updateTeachers(brRegistracije, data);
      res.json(updatedVehicle);
    } catch (error) {
      next(error);
    }
}
async function updateData(req, res, next) {
    try {
      const { brRegistracije, data } = req.body;
      const updatedVehicle = await model.updateData(brRegistracije, data);
      res.json(updatedVehicle);
    } catch (error) {
      next(error);
    }
}



module.exports = {
    getVehicles,
    addVehicle,
    updateTeachers,
    updateData,
}