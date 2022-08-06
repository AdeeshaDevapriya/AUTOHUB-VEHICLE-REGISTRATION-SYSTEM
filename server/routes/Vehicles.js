const express = require('express');
const router = express.Router();
let Vehicle = require("../models/Vehicle");



router.post('/add', (req, res) => {


    const newVehicle = new Vehicle({

        Vehicle_Number: req.body.Vehicle_Number,
        Current_Owner: req.body.Current_Owner,
        Make: req.body.Make,
        Model: req.body.Model,
        Colour: req.body.Colour,
        Provincial_Council: req.body.Provincial_Council,
        Year_of_Manufacture: req.body.Year_of_Manufacture,
        Fuel_Type: req.body.Fuel_Type

    });

    

    newVehicle.save().then(() =>
        res.json("Vehicle Added")
    ).catch((err) => res.status(400).json(err.message));

});



router.get('/view', (req, res) => {
    Vehicle.find().then(vehi => res.json(vehi))
        .catch((err) => res.status(400).json(err.message));

});


router.put('/update/:id', (req, res) => {
    Vehicle.findById(req.params.id).then(vehi => {
            vehi.Vehicle_Number = req.body.Vehicle_Number;
            vehi.Current_Owner = req.body.Current_Owner;
            vehi.Make = req.body.Make;
            vehi.Model = req.body.Model;
            vehi.Colour = req.body.Colour;
            vehi.Provincial_Council = req.body.Provincial_Council;
            vehi.Year_of_Manufacture = req.body.Year_of_Manufacture;
            vehi.Fuel_Type = req.body.Fuel_Type;
            vehi.save().then(() => res.json("Vehicle update successfully"))
                .catch((err) => res.status(400).json(err.message));

        })
        .catch((err) => res.status(400).json(err.message));

});

router.delete('/delete/:id', (req, res) => {
    Vehicle.findByIdAndDelete(req.params.id).then(() => res.json("Vehicle deleted"))
        .catch((err) => res.status(400).json(err.message));

});

router.route("/view/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await Vehicle.findById(userId)
        .then(response => res.json(response))
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
        
})




module.exports = router;