const mongoose = require('mongoose');
const schema = mongoose.Schema;
const VehicleSchema = new schema({

    Vehicle_Number: {
        type: String,
        required: true
    },
    Current_Owner: {
        type: String,
        required: true
    },
    Make: {
        type: String,
        required: true
    },
    Model: {
        type: String,
        required: true
    },
    Colour: {
        type: String,
        required: true
    },
    Provincial_Council: {
        type: String,
        required: true
    },
    Year_of_Manufacture: {
        type: String,
        required: true
    },
    
    Fuel_Type: {
        type: String,
        required: true
    }
});
const Vehicles = mongoose.model("Vehicles", VehicleSchema);
module.exports = Vehicles;